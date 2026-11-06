import * as THREE from './vendor/three/three.module.js';
// A physical book of chapter scenes. All scene images and Three.js are hosted locally.
export function createWorld(container, chapters, options={}) {
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.setClearColor(0xeeeadf,0);container.appendChild(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(39,1,.1,100);
 let distance=21,angle=0,targetAngle=0,visible=true,raf,drag=null,moved=false,disposed=false;
 camera.position.set(0,11,distance);camera.lookAt(0,1.1,0);
 scene.add(new THREE.HemisphereLight(0xfff5dc,0x677d75,2.8));
 const key=new THREE.DirectionalLight(0xffe8b7,3.2);key.position.set(-8,14,10);scene.add(key);
 const group=new THREE.Group();scene.add(group);
 const book=new THREE.Mesh(new THREE.BoxGeometry(20,.25,13),new THREE.MeshStandardMaterial({color:0x263e48,roughness:.85}));book.position.y=-.25;group.add(book);
 const pagesMaterial=new THREE.MeshStandardMaterial({color:0xe8dfc8,roughness:1});
 const leftPage=new THREE.Mesh(new THREE.BoxGeometry(9.8,.16,12.6),pagesMaterial);leftPage.position.set(-4.95,-.03,0);leftPage.rotation.z=.012;group.add(leftPage);
 const rightPage=leftPage.clone();rightPage.position.x=4.95;rightPage.rotation.z=-.012;group.add(rightPage);
 const spine=new THREE.Mesh(new THREE.BoxGeometry(.07,.04,12.5),new THREE.MeshStandardMaterial({color:0xa28d65,roughness:1}));spine.position.y=.11;group.add(spine);
 const smallLineMaterial=new THREE.LineBasicMaterial({color:0xc7b998,transparent:true,opacity:.55});
 for(let z=-5;z<=5;z+=.65){const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-9.2,.065,z),new THREE.Vector3(-.35,.065,z)]),smallLineMaterial);group.add(line);const other=line.clone();other.position.x=9.4;group.add(other);}
 const interact=[],resources=[],points=[];
 function drawLabel(ctx,text,x,y,maxWidth){ctx.font='500 27px "Songti SC",serif';ctx.fillStyle='#3c594c';let current='',lines=[];for(const ch of text){if(ctx.measureText(current+ch).width>maxWidth&&current){lines.push(current);current=ch;}else current+=ch;}if(current)lines.push(current);lines.slice(0,2).forEach((s,i)=>ctx.fillText(s,x,y+i*40));}
 function chapterTexture(d,index){const canvas=document.createElement('canvas');canvas.width=512;canvas.height=680;const ctx=canvas.getContext('2d');const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),4);resources.push(texture);
  const draw=image=>{ctx.fillStyle='#f1e8d3';ctx.fillRect(0,0,512,680);ctx.strokeStyle='#4c6258';ctx.lineWidth=3;ctx.strokeRect(14,14,484,652);if(image){const targetW=458,targetH=430,ratio=Math.max(targetW/image.width,targetH/image.height),sw=targetW/ratio,sh=targetH/ratio;ctx.drawImage(image,(image.width-sw)/2,(image.height-sh)/2,sw,sh,27,27,targetW,targetH);}else{ctx.fillStyle='#d2d9c9';ctx.fillRect(27,27,458,430);ctx.fillStyle='#93a18e';ctx.font='20px serif';ctx.fillText('场景正在展开',174,245);}ctx.fillStyle='#9ba58b';ctx.font='17px sans-serif';ctx.fillText(`第 ${String(index).padStart(2,'0')} 章  /  ${d.startYear}—${Math.min(d.endYear,2100)}`,35,498);drawLabel(ctx,d.title,35,544,442);ctx.fillStyle='#b0b59c';ctx.font='15px sans-serif';ctx.fillText(`虚岁 ${d.start}—${Math.min(d.end,101)}`,35,643);texture.needsUpdate=true;};draw(null);const image=new Image();image.onload=()=>{if(!disposed)draw(image);};image.src=options.image(index);return texture;
 }
 chapters.forEach((d,i)=>{const theta=(i/(chapters.length-1)-.5)*Math.PI*1.64;const x=Math.sin(theta)*7.7,z=Math.cos(theta)*4.8-1.1;const y=2.15+.12*Math.sin(i);points.push(new THREE.Vector3(x,.15,z));
  const card=new THREE.Mesh(new THREE.BoxGeometry(2.35,3.12,.055),new THREE.MeshStandardMaterial({color:0xf1e8d3,roughness:.95}));card.position.set(x,y,z);card.rotation.y=theta*.42;group.add(card);
  const front=new THREE.Mesh(new THREE.PlaneGeometry(2.35,3.12),new THREE.MeshStandardMaterial({map:chapterTexture(d,i),roughness:.94,side:THREE.DoubleSide}));front.position.set(0,0,.035);front.userData.chapterIndex=i;card.add(front);interact.push(front);
  const base=new THREE.Mesh(new THREE.CylinderGeometry(.13,.17,.2,16),new THREE.MeshStandardMaterial({color:0xb28d51,metalness:.35,roughness:.5}));base.position.set(x,.18,z);group.add(base);
  const string=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,.2,z),new THREE.Vector3(x,y-1.56,z)]),new THREE.LineBasicMaterial({color:0x9ba88d,transparent:true,opacity:.55}));group.add(string);
 });
 const route=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:0xb1965f,transparent:true,opacity:.8}));group.add(route);
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
 function hit(event){const r=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(interact,false)[0];}
 function onDown(event){if(event.button!==0)return;drag={x:event.clientX,y:event.clientY,angle:targetAngle};moved=false;renderer.domElement.setPointerCapture?.(event.pointerId);}
 function onMove(event){if(drag){const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>6)moved=true;targetAngle=drag.angle+dx*.005;}else{renderer.domElement.style.cursor=hit(event)?'pointer':'grab';}}
 function onUp(event){if(drag&&!moved){const selected=hit(event);if(selected)options.onSelect?.(selected.object.userData.chapterIndex);}drag=null;}
 function onWheel(event){if(!visible)return;event.preventDefault();distance=THREE.MathUtils.clamp(distance+event.deltaY*.012,15,29);camera.position.set(0,distance*.52,distance);camera.lookAt(0,1.1,0);}
 const canvas=renderer.domElement;canvas.addEventListener('pointerdown',onDown);canvas.addEventListener('pointermove',onMove);canvas.addEventListener('pointerup',onUp);canvas.addEventListener('pointercancel',()=>drag=null);canvas.addEventListener('wheel',onWheel,{passive:false});canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();visible=false;options.onUnavailable?.();});
 function resize(){if(disposed)return;const w=container.clientWidth,h=container.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
 const observer=new ResizeObserver(resize);observer.observe(container);resize();
 function draw(){if(disposed)return;raf=requestAnimationFrame(draw);if(!visible||document.hidden)return;angle=options.reduce?targetAngle:angle+(targetAngle-angle)*.1;group.rotation.y=angle;renderer.render(scene,camera);}
 draw();return{rotate(delta){targetAngle+=delta;},resize,setVisible(value){visible=!!value;if(visible)resize();},dispose(){disposed=true;cancelAnimationFrame(raf);observer.disconnect();resources.forEach(r=>r.dispose());scene.traverse(object=>{object.geometry?.dispose();if(Array.isArray(object.material))object.material.forEach(m=>m.dispose());else object.material?.dispose();});renderer.dispose();canvas.remove();}};
}

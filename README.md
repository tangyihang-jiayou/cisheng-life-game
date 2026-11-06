# 此生 · 人生漫画

紫微斗数年度故事、命盘依据与交互式人生探索。

[打开公开网页](https://tangyihang-jiayou.github.io/cisheng-life-game/)

`dist/` 是可直接托管的静态网页；`engine/` 保存排盘及故事构建源码。
采用固定版本 iztro 2.6.4，依赖许可见 `dist/LICENSE-iztro.txt`。
曲线是叙事编辑指数，选择分支是模拟；传统术数不具经验证的个人未来预测效力。

本地预览：`python3 -m http.server 8000 --directory dist`，访问 `http://localhost:8000`。

重建数据：`npm ci --prefix engine`，再运行 `npm run build --prefix engine`。
数据核验：`npm run verify --prefix engine`。

推送 `main` 或手动运行 Deploy workflow，通过 GitHub Actions 发布 `dist/`。
浏览进度保存在当前浏览器的 localStorage 中。

游戏含 101 年、101 张逐年专属插画、303 个短分镜、六类动作、11 张章节插画与两张封面/角色图。
主界面突出本命／大限／流年主星；机会、阻力、净势三条曲线可切换原始或戏剧刻度，逐年查看判断和依据。
插画由 OpenAI 生图工具逐张原创生成，是基于年度排盘及故事的虚构情境；年图哈希与创作依据见 `dist/art-index.json`，设计参考见 `dist/comic-data.json`。

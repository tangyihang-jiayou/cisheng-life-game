# 此生 · 唐一航的人生模拟

一段可以选择、回看和分岔的人生：真实记录、紫微斗数年度主题与虚构未来故事。

[打开公开网页](https://tangyihang-jiayou.github.io/cisheng-life-game/)

`dist/` 是可直接托管的静态网页；`engine/` 保存排盘及故事构建源码。
采用固定版本 iztro 2.6.4，依赖许可见 `dist/LICENSE-iztro.txt`。
曲线是叙事编辑指数，选择分支是模拟；传统术数不具经验证的个人未来预测效力。

本地预览：`python3 -m http.server 8000 --directory dist`，访问 `http://localhost:8000`。

重建命盘与旧漫画数据：`npm ci --prefix engine`，再运行 `npm run build --prefix engine`。
数据核验：`npm run verify --prefix engine`。

推送 `main` 或手动运行 Deploy workflow，通过 GitHub Actions 发布 `dist/`。
浏览进度保存在当前浏览器的 localStorage 中。

新版包含 79 类事件、158 段故事、24 张决策卡与 72 个具体选项；2026–2100 每年有独立的命盘解读。传记底稿与上一版支线分别保留在 `storybook.html`、`previous-edition.html`。
主界面突出本命／大限／流年主星，三方四正、同星叠化与逐年判断可展开核对；曲线、收藏、分岔与导入导出均在浏览器内运行。
插画由 OpenAI 生图工具逐张原创生成，是基于年度排盘及故事的虚构情境；年图哈希与创作依据见 `dist/art-index.json`，设计参考见 `dist/comic-data.json`。

公开版为 GitHub Pages 静态站点；统计世界提供 1in8b 官方体验入口，不包含 API 密钥、私人原始文档或本地服务器。

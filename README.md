# 个人主页

一个可直接部署到 GitHub Pages 的响应式个人主页。

## 修改个人信息

打开 `script.js`，修改顶部的 `PROFILE` 配置即可替换姓名、简介、GitHub 地址和项目链接。当前版本已接入 `Janson14332` 的公开 GitHub 项目。

## 发布到 GitHub Pages

1. 在 GitHub 新建名为 `你的用户名.github.io` 的公开仓库。
2. 把本目录下的 `index.html`、`styles.css`、`script.js` 上传到仓库根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`。
5. 稍等片刻后访问 `https://你的用户名.github.io/`。

本项目不依赖任何框架或第三方资源，上传后即可运行。


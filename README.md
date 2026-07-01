# 郭权 - 个人学术主页（GitHub Pages 部署包）

## 部署说明

1. 将本压缩包解压后的所有内容上传至 GitHub 仓库根目录
2. 仓库应为 **用户主页仓库**（仓库名：`你的用户名.github.io`）
3. 进入仓库 **Settings -> Pages**
4. Source 选择 **GitHub Actions**
5. 网站将由 `.github/workflows/deploy.yml` 自动构建并发布

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm ci
npm run build
```

构建产物输出到 `dist` 目录。

## 内容修改

主要修改以下两个文件：

- `src/content.ts` — 个人信息、教育背景、论文列表、研究兴趣等数据
- `src/pages/Home.tsx` — 页面结构和排版

## 技术栈

- React + TypeScript + Vite
- Tailwind CSS

# uni-vue3-ts-template
uni-app Vue3 + TypeScript + Vite + Pinia 模板项目

支持小程序，H5，App（未验证）

* Vue3的Web应用模板：[vite-vue3-template](https://github.com/ATQQ/vite-vue3-template)
* Vue2的uni-app模板：[uni-app-template](https://github.com/ATQQ/uni-app-template) = 不再维护
## feature
### prod
* [x] [Vue3](https://vuejs.org/)
* [ ] [Pinia](https://pinia.vuejs.org/) - replace vuex
* [ ] [Axios Mini Program](https://github.com/fluffff/axios-miniprogram#readme) - Support uni-app
* UI
  * 
### dev
* [x] [Vite](https://github.com/vitejs/vite)
* [x] [TypeScript](https://github.com/microsoft/TypeScript/#readme)
* [x] [Sass](https://github.com/sass/sass)
* [x] [Less](https://github.com/less/less.js)
* [x] [Eslint](https://eslint.org/)
* [x] [Prettier](https://prettier.io/)
* [x] [Vitest](https://vitest.dev/) - replace jest

## 使用
### 安装依赖
```sh
npm i -g pnpm
```

```sh
pnpm install
```

### 本地启动指令
#### 微信小程序
```sh
pnpm dev:mp-weixin
```

#### H5
```sh
# CSR
pnpm dev:h5
# SSR
pnpm dev:h5:ssr
```

### 打包构建指令
#### 微信小程序
```
pnpm build:mp-weixin
```
#### H5
```sh
# CSR
pnpm build:h5
# SSR
pnpm build:h5:ssr
```

## 运行产物演示
TODO:待补全
### 运行小程序
然后将编译结果`dist/dev/mp-weixin`导入微信开发者工具即可运行

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjc3MjA4Mw==637416772083)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjg4MTUwNA==637416881504)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjY3OTY0NQ==637416679645)

## 运行APP
TODO:

## H5
TODO:


其它更多运行脚本 查看 [package.json](./package.json)中的scripts

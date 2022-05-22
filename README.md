# uni-vue3-ts-template
uni-app Vue3 + TypeScript + Vite + Pinia 模板项目

支持小程序，H5，App（待验证）

* Vue3的Web应用模板：[vite-vue3-template](https://github.com/ATQQ/vite-vue3-template)
* Vue2的uni-app模板：[uni-app-template](https://github.com/ATQQ/uni-app-template) = 不再维护

|                                     H5                                      |                                 微信小程序                                  | App(IOS) | App(Android) |
| :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :------: | :----------: |
| ![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzE5Mzc4MzUyMQ==653193783521) | ![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzE5Mzc1Mzk1MQ==653193753951) |  待验证  |    待验证    |
## feature
### prod
* [x] [Vue3](https://vuejs.org/)
* [x] [Pinia](https://pinia.vuejs.org/) - replace vuex
* [x] [Axios](https://github.com/axios/axios)
* UI
  * 待定
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
### 运行小程序
然后将编译结果`dist/dev/mp-weixin`导入微信开发者工具即可运行

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjc3MjA4Mw==637416772083)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjg4MTUwNA==637416881504)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjY3OTY0NQ==637416679645)

## 运行APP
TODO:待补

## H5
TODO:待补


其它更多运行脚本 查看 [package.json](./package.json)中的scripts

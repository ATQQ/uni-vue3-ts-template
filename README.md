# uni-vue3-ts-template
uni-app Vue3 + TypeScript + Vite + Pinia 模板项目

支持小程序，H5，App

* Vue3的Web应用模板：[vite-vue3-template](https://github.com/ATQQ/vite-vue3-template)
* Vue2的uni-app模板：[uni-app-template](https://github.com/ATQQ/uni-app-template) = 不再维护

|                                     H5                                      |                                 微信小程序                                  |                                  App(iOS)                                   | App(Android) |
| :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :----------: |
| ![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzE5Mzc4MzUyMQ==653193783521) | ![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzE5Mzc1Mzk1MQ==653193753951) | ![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzIxMDc2NTcwNg==653210765706) |    待验证    |

## Use This Template
```sh
npx degit atqq/uni-vue3-ts-template#main my-uni-vue3-ts-vite-project
```
## Feature
### Prod
* [x] [Vue3](https://vuejs.org/)
* [x] [Pinia](https://pinia.vuejs.org/) - replace vuex
* [x] [Axios](https://github.com/axios/axios)
* UI
  * 待定
### Dev
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

## 本地启动
### 微信小程序
```sh
# 构建出产物
pnpm dev:mp-weixin
```

然后将编译结果`dist/dev/mp-weixin`导入微信开发者工具即可运行

<details>
<summary>点击查看 微信开发者工具导入示例</summary>

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjc3MjA4Mw==637416772083)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjg4MTUwNA==637416881504)

![图片](https://img.cdn.sugarat.top/mdImg/MTYzNzQxNjY3OTY0NQ==637416679645)

</details>

### H5
```sh
# CSR
pnpm dev:h5
# SSR
pnpm dev:h5:ssr
```

根据提示，打开对应地址即可访问

![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzIxMTE0MDEzMg==653211140132)

### App

#### 安装一些必要工具
需要使用 `uni-app` 官方提供的 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 启动项目

**Android模拟器在MacOSX、Windows上都可以安装；iOS模拟器只能在MacOSX上安装。**

先安装相关模拟器，[详细参考文档](https://hx.dcloud.net.cn/Tutorial/App/installSimulator)
* 安卓：[夜神模拟器](https://www.yeshen.com/blog/)
* iOS：Mac上安装Xcode

准备就绪后，使用 HBuilderX 打开项目
#### iOS模拟器运行
通过顶部菜单栏，找到运行入口

![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzIxMjk1MTgzNw==653212951837)

选择一个目标设备，点击启动即可

![图片](https://img.cdn.sugarat.top/mdImg/MTY1MzIxMjk3NDM0NQ==653212974345)

#### Android模拟器运行

## 打包构建
### 微信小程序
```
pnpm build:mp-weixin
```
### H5
```sh
# CSR
pnpm build:h5
# SSR
pnpm build:h5:ssr
```

### App
基于 `HBuilderX` 参考[官方文档](https://hx.dcloud.net.cn/Tutorial/App/SafePack)进行进一步的操作

其它更多运行脚本 查看 [package.json](./package.json)中的scripts

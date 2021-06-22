# uni-vue3-ts-template
uni-app vue3-ts 模板项目

主要用于小程序开发使用
## feature
### prod
* [x] Vue3
* [ ] vuex
* [ ] 类Axios[axios-miniprogram](https://github.com/fluffff/axios-miniprogram#readme)
* [ ] [Vue3-Vant](https://vant-contrib.gitee.io/vant/v3/#/zh-CN)

### dev
* [ ] eslint
* [x] sass
* [x] typescript

## 使用
### 安装依赖
```
yarn install
```

### 开发热重载
#### h5
```
yarn serve
```
#### 微信小程序
```
yarn dev:mp-weixin
```

### 生产环境打包构建
#### h5
```
yarn build
```

#### 微信小程序
```
yarn build:mp-weixin
```

其它更多脚本 查看 [package.json](./package.json)中的scripts

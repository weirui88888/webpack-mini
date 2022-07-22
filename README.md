### 简介

本仓库主要是用来记录学习 webpack 源码的一些记录

### 目录

```javascript
├── commonjs // 该目录为实现一个简单的webpack将commonjs规范的代码转成浏览器可识别的代码
│   ├── core // webpack核心代码
│   │   ├── compiler.js // 编译核心代码
│   │   ├── index.js
│   │   ├── utils // 工具类代码
│   │   └── webpack.js
│   ├── example // 想像成自己的业务代码
│   │   ├── dist // 生成代码
│   │   ├── src
│   │   └── webpack.config.js // webpack配置文件
│   ├── loaders // 自定义loader
│   │   ├── loader-1.js
│   │   └── loader-2.js
│   └── plugins // 自定义plugin
│       ├── plugin-a.js
│       └── plugin-b.js
└── esm // 该目录实现一个简单的webpack将esm规范的代码转成浏览器可识别的代码
    ├── dist // 生成代码
    │   ├── index.html
    │   └── main.js
    ├── lib // 比较简单，一个解析文件、一个模版文件
    │   ├── parse.js
    │   └── template.js
    ├── real-webpack-no-comment.js // 这个是使用真正的webpack编译后的代码，我把注释删除了，方便阅读而已
    ├── src // 想像成自己的业务代码
    │   ├── hello.js
    │   ├── helloWorld.js
    │   ├── index.js
    │   └── user.js
    └── webpack.config.js // webpack配置文件
```

### 脚本

```javascript
npm run esm-webpack // 调用自己实现的webpack实现esm代码转浏览器可识别的js代码(代码看esm目录)
or
npm run commonjs-webpack // 调用自己实现的webpack实现commonjs代码转浏览器可识别的js代码(代码看commonjs目录)
```

### 参考

[手写 webpack（对应 esm 目录）](http://dennisgo.cn/Articles/Engineering/mini-webpack.html)

这篇文章可以主要用来学习 babel 解析源码成 AST 后做了哪些事，然后如何转换成浏览器可识别的代码（建议先读这个，然后在看下面那个，更容易理解）

[Webapck5 核心打包原理全流程解析（对应 commonjs 目录）](https://juejin.cn/post/7031546400034947108#heading-15)

这篇文章很棒，通过示例层层递进的展示了 webpack 在我们编译代码的过程中，都做了哪些事。读个三遍，基本上就对整个过程有一定的理解了。

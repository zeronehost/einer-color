# einer-color

终端输出字体颜色。

## 安装

### npm 

```bash
npm install einer-color
```

### yarn 

```bash
yarn add einer-color
```

## API

### 前景色

* `black`
* `red`
* `green`
* `yellow`
* `blue`
* `magenta`
* `cyan`
* `white`

### 背景色

* `bgBlack`
* `bgRed`
* `bgGreen`
* `bgYellow`
* `bgBlue`
* `bgMagenta`
* `bgCyan`
* `bgWhite`

### 样式

* `blod`
* `italic`
* `underline`
* `blink`
* `inverse`
* `strike`

### 其他

* `reset` 重置

## 示例

```javascript
const einerColor = require("einer-color");

console.log(einerColor.bgGreen.white.blod(" einer-color "));
```
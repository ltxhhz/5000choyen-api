# 5000choyen-api

<img src="./6650400i.jpg" align="center">

想要 5000 兆元风格图片！使用 skia-canvas 在服务端生成。

> fork 自[原仓库](https://github.com/CyberRex0/5000choyen-api)，使用 ts 重写

[![npm](https://img.shields.io/npm/v/@ltxhhz/5000choyen-api?style=flat-square)](https://www.npmjs.com/package/@ltxhhz/5000choyen-api)

## how to use

```ts
import { FTCanvas } from "@ltxhhz/5000choyen-api"
const options = {
  top: "上部分文字",
  bottom: "下部分文字",
  rainbow: true, //彩色字
  hoshii: false, //下半句使用默认日语"想要"
}

const canvas = new FTCanvas(options)
canvas.draw()
canvas.createBuffer("png") //图片buffer
```

## 添加字体

- 仓库字体[来源](https://github.com/notofonts/noto-cjk)

```ts
import { join } from "path"
import { FontLibrary } from "./main"

FontLibrary.use([
  join(__dirname, "./fonts/NotoSansCJKsc-Black.otf")
])
```
- [FontLibrary](https://www.npmjs.com/package/skia-canvas#FontLibrary) 食用方法
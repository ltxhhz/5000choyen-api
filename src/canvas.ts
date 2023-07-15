import { Canvas, FontLibrary } from "skia-canvas";
import { BGColor, Drawer } from "./drawer";
import type { CanvasRenderingContext2D, ExportFormat } from "skia-canvas";

export interface Offset {
  top: {
    x: number
    y: number
  }
  bottom: {
    x: number
    y: number
  }
}

export interface Config {
  canvas?: Canvas
  hoshii?: boolean
  noalpha?: boolean
  debug?: boolean
  rainbow?: boolean
  topText?: string
  bottomText?: string
  offset?: Offset
}


export class FTCanvas {
  canvas: Canvas
  ctx: CanvasRenderingContext2D
  offset: { top: { x: number; y: number; }; bottom: { x: number; y: number; }; }
  fixedX: number
  dragging: boolean
  dragPosition: { x0: number; y0: number; }
  hoshii: boolean
  noalpha: boolean
  get single() {
    return !!this.topText != !!this.bottomText
  }
  rainbow: boolean

  topText?: string
  bottomText?: string

  debug: boolean
  drawer: Drawer
  constructor(config: Config) {
    this.canvas = config.canvas || new Canvas(3840, 1080);

    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.offset = {
      top: {
        x: 0,
        y: 0
      },
      bottom: {
        x: 250,
        y: 130
      }
    };

    this.fixedX = 60;

    this.dragging = false;
    this.dragPosition = {
      x0: 0,
      y0: 0
    };

    this.hoshii = !!config.hoshii
    this.noalpha = !!config.noalpha
    this.debug = !!config.debug
    this.rainbow = !!config.rainbow
    this.topText = config.topText
    this.bottomText = config.bottomText

    // config.offset = this.offset; // 用于single参数处理时的重写

    this.drawer = new Drawer(this.ctx, { single: this.single });
  }

  redrawTop(text: string, isRainbow?: boolean) {
    let x = 70;
    let y = 100;
    let order: BGColor = this.noalpha ? 'white' : 'transparent';
    if (this.debug) order = 'debug';
    if (this.single) {
      x = this.fixedX;
      y = 100;
    }

    if (isRainbow) {
      this.drawer.redrawTop_rainbow(text, x, y, order);
    } else {
      this.drawer.redrawTop(text, x, y, order);
    }

    if (this.hoshii === true) {
      this.redrawImage();
    } /* else {
      //this.redrawBottom(text, isRainbow);
    } */
  }

  redrawBottom(txt: string, offsetX?: number, isRainbow?: boolean) {
    const text = txt.replace(/！/, `!`);
    let x = (offsetX || this.offset.bottom.x) + 70;
    let y = this.offset.bottom.y + 100;
    let order: BGColor = this.noalpha ? 'white' : 'transparent';
    if (this.debug) order = 'debug';
    if (this.single) {
      x = this.fixedX;
      y = 100;
    }
    if (isRainbow) {
      this.drawer.redrawBottom_rainbow(text, x, y, order);
    } else {
      this.drawer.redrawBottom(text, x, y, order);
    }
  }
  redrawImage(offsetX?: number) {
    const x = (offsetX || this.offset.bottom.x) + 70;
    const y = this.offset.bottom.y;
    let order: BGColor = this.noalpha ? 'white' : 'transparent';
    if (this.debug) order = 'debug';
    this.drawer.redrawImage(x, y, order);
  }

  draw() {
    if (this.single) {
      if (this.topText) {
        this.redrawTop(this.topText, this.rainbow)
      } else {
        this.redrawBottom(this.bottomText, null, this.rainbow)
      }
    } else {
      this.redrawTop(this.topText, this.rainbow)
      if (this.hoshii) {
        this.redrawImage()
      } else {
        this.redrawBottom(this.bottomText, null, this.rainbow)
      }
    }
  }

  save() {
    this.drawer.save()
  }

  createBuffer(t: ExportFormat) {
    return this.drawer.createBuffer(t)
  }
}

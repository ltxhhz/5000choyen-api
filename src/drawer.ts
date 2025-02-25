import { Hoshii } from "./hoshii";
import { Generator } from "./generator";
import type { CanvasRenderingContext2D, ExportFormat } from "skia-canvas";
export type BGColor = 'white' | 'transparent' | 'debug'
export class Drawer {
  ctx: CanvasRenderingContext2D
  actualWidth: { top: number; bottom: number; };
  actualHeight: number;
  logo: Hoshii;
  generator: Generator;
  config: { single?: boolean };
  fixedHeight: number;
  constructor(ctx: CanvasRenderingContext2D, config: { single?: boolean }) {
    this.ctx = ctx
    this.actualWidth = { top: 0, bottom: 0 };
    this.actualHeight = 0;
    this.logo = new Hoshii();
    this.generator = new Generator(this.ctx);
    this.config = config;
    this.fixedHeight = 220;
  }
  redrawTop(text: string, x: number, y: number, bgColor: BGColor) {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.font = '100px notobk';

    switch (bgColor) {
      case `white`:
        this.ctx.fillStyle = `white`;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
      case `transparent`:
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
      case `debug`:
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
    }

    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
      this.ctx.strokeStyle = "#000";
      this.ctx.lineWidth = 22;
      this.ctx.strokeText(text, x + 4, y + 4);
    }

    //銀色
    {
      const grad = this.ctx.createLinearGradient(0, 24, 0, 122);
      grad.addColorStop(0.0, 'rgb(0,15,36)');
      grad.addColorStop(0.10, 'rgb(255,255,255)');
      grad.addColorStop(0.18, 'rgb(55,58,59)');
      grad.addColorStop(0.25, 'rgb(55,58,59)');
      grad.addColorStop(0.5, 'rgb(200,200,200)');
      grad.addColorStop(0.75, 'rgb(55,58,59)');
      grad.addColorStop(0.85, 'rgb(25,20,31)');
      grad.addColorStop(0.91, 'rgb(240,240,240)');
      grad.addColorStop(0.95, 'rgb(166,175,194)');
      grad.addColorStop(1, 'rgb(50,50,50)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 20;
      this.ctx.strokeText(text, x + 4, y + 4);
    }

    //黒色
    {
      this.ctx.strokeStyle = "#000000";
      this.ctx.lineWidth = 16;
      this.ctx.strokeText(text, x, y);
    }

    //金色
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(253,241,0)');
      grad.addColorStop(0.25, 'rgb(245,253,187)');
      grad.addColorStop(0.4, 'rgb(255,255,255)');
      grad.addColorStop(0.75, 'rgb(253,219,9)');
      grad.addColorStop(0.9, 'rgb(127,53,0)');
      grad.addColorStop(1, 'rgb(243,196,11)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 10;
      this.ctx.strokeText(text, x, y);
    }

    //黒
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#000';
    this.ctx.strokeText(text, x + 2, y - 3);

    //白
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.strokeText(text, x, y - 3);

    //赤
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(255, 100, 0)');
      grad.addColorStop(0.5, 'rgb(123, 0, 0)');
      grad.addColorStop(0.51, 'rgb(240, 0, 0)');
      grad.addColorStop(1, 'rgb(5, 0, 0)');
      this.ctx.lineWidth = 4;
      this.ctx.strokeStyle = grad;
      this.ctx.strokeText(text, x, y - 3);
    }

    //赤
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(230, 0, 0)');
      grad.addColorStop(0.5, 'rgb(123, 0, 0)');
      grad.addColorStop(0.51, 'rgb(240, 0, 0)');
      grad.addColorStop(1, 'rgb(5, 0, 0)');
      this.ctx.fillStyle = grad;
      this.ctx.fillText(text, x, y - 3);
    }

    const textWH = this.ctx.measureText(text);
    this.actualWidth.top = textWH.width + x;
    if (!this.config.single) {
      this.actualHeight = 120 + y;
    } else {
      this.actualHeight = this.fixedHeight;
    }
  }
  redrawTop_rainbow(text: string, x: number, y: number, bgColor: BGColor) {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.font = '100px notobk';

    switch (bgColor) {
      case `white`:
        this.ctx.fillStyle = `white`;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
      case `transparent`:
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
      case `debug`:
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
    }

    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
      this.ctx.strokeStyle = "#000";
      this.ctx.lineWidth = 22;
      this.ctx.strokeText(text, x + 4, y + 4);
    }

    //銀色
    {
      const grad = this.ctx.createLinearGradient(0, 24, 0, 122);
    }

    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
      this.ctx.strokeStyle = "#000";
      this.ctx.lineWidth = 22;
      this.ctx.strokeText(text, x + 4, y + 4);
    }

    //銀色
    {
      const grad = this.ctx.createLinearGradient(0, 24, 0, 122);
      grad.addColorStop(0, 'red');
      grad.addColorStop(0.25, 'yellow');
      grad.addColorStop(0.5, 'green');
      grad.addColorStop(0.75, 'blue');
      grad.addColorStop(1.0, 'violet');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 20;
      this.ctx.strokeText(text, x + 4, y + 4);
    }

    //黒色
    {
      this.ctx.strokeStyle = "#000000";
      this.ctx.lineWidth = 16;
      this.ctx.strokeText(text, x, y);
    }

    //金色
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'red');
      grad.addColorStop(0.25, 'yellow');
      grad.addColorStop(0.5, 'green');
      grad.addColorStop(0.75, 'blue');
      grad.addColorStop(1.0, 'violet');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 10;
      this.ctx.strokeText(text, x, y);
    }

    //黒
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#000';
    this.ctx.strokeText(text, x + 2, y - 3);

    //白
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.strokeText(text, x, y - 3);

    //赤
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'red');
      grad.addColorStop(0.25, 'yellow');
      grad.addColorStop(0.5, 'green');
      grad.addColorStop(0.75, 'blue');
      grad.addColorStop(1.0, 'violet');
      this.ctx.lineWidth = 4;
      this.ctx.strokeStyle = grad;
      this.ctx.strokeText(text, x, y - 3);
    }

    //赤
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(230, 0, 0)');
      grad.addColorStop(0.5, 'rgb(123, 0, 0)');
      grad.addColorStop(0.51, 'rgb(240, 0, 0)');
      grad.addColorStop(1, 'rgb(5, 0, 0)');
      this.ctx.fillStyle = grad;
      this.ctx.fillText(text, x, y - 3);
    }

    //黒色
    {
      this.ctx.strokeStyle = "#000000";
      this.ctx.lineWidth = 16;
      this.ctx.strokeText(text, x, y);
    }

    //金色
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(253,241,0)');
      grad.addColorStop(0.25, 'rgb(245,253,187)');
      grad.addColorStop(0.4, 'rgb(255,255,255)');
      grad.addColorStop(0.75, 'rgb(253,219,9)');
      grad.addColorStop(0.9, 'rgb(127,53,0)');
      grad.addColorStop(1, 'rgb(243,196,11)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 10;
      this.ctx.strokeText(text, x, y);
    }

    //黒
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#000';
    this.ctx.strokeText(text, x + 2, y - 3);

    //白
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.strokeText(text, x, y - 3);

    //赤
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(255, 100, 0)');
      grad.addColorStop(0.5, 'rgb(123, 0, 0)');
      grad.addColorStop(0.51, 'rgb(240, 0, 0)');
      grad.addColorStop(1, 'rgb(5, 0, 0)');
      this.ctx.lineWidth = 4;
      this.ctx.strokeStyle = grad;
      this.ctx.strokeText(text, x, y - 3);
    }

    //赤
    {
      const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(230, 0, 0)');
      grad.addColorStop(0.5, 'rgb(123, 0, 0)');
      grad.addColorStop(0.51, 'rgb(240, 0, 0)');
      grad.addColorStop(1, 'rgb(5, 0, 0)');
      this.ctx.fillStyle = grad;
      this.ctx.fillText(text, x, y - 3);
    }

    const textWH = this.ctx.measureText(text);
    this.actualWidth.top = textWH.width + x;
    if (!this.config.single) {
      this.actualHeight = 120 + y;
    } else {
      this.actualHeight = this.fixedHeight;
    }
  }

  redrawBottom(text: string, x: number, y: number, bgColor: BGColor) {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.font = '100px notoserifbk';

    if (bgColor === `white`) {
      this.ctx.fillStyle = bgColor;
      this.ctx.fillRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
    } else if (bgColor === `transparent`) {
      this.ctx.clearRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
    } else if (bgColor === `debug`) {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
    }
    // if (this.config.single) {
    //   this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);
    // }

    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
      this.ctx.strokeStyle = "#000";
      this.ctx.lineWidth = 22;
      this.ctx.strokeText(text, x + 5, y + 2);
    }

    // 銀
    {
      const grad = this.ctx.createLinearGradient(0, y - 80, 0, y + 18);
      grad.addColorStop(0, 'rgb(0,15,36)');
      grad.addColorStop(0.25, 'rgb(250,250,250)');
      grad.addColorStop(0.5, 'rgb(150,150,150)');
      grad.addColorStop(0.75, 'rgb(55,58,59)');
      grad.addColorStop(0.85, 'rgb(25,20,31)');
      grad.addColorStop(0.91, 'rgb(240,240,240)');
      grad.addColorStop(0.95, 'rgb(166,175,194)');
      grad.addColorStop(1, 'rgb(50,50,50)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 19;
      this.ctx.strokeText(text, x + 5, y + 2);
    }

    //黒色
    {
      this.ctx.strokeStyle = "#10193A";
      this.ctx.lineWidth = 17;
      this.ctx.strokeText(text, x, y);
    }

    // 白
    {
      this.ctx.strokeStyle = "#DDD";
      this.ctx.lineWidth = 8;
      this.ctx.strokeText(text, x, y);
    }

    //紺
    {
      const grad = this.ctx.createLinearGradient(0, y - 80, 0, y);
      grad.addColorStop(0, 'rgb(16,25,58)');
      grad.addColorStop(0.03, 'rgb(255,255,255)');
      grad.addColorStop(0.08, 'rgb(16,25,58)');
      grad.addColorStop(0.2, 'rgb(16,25,58)');
      grad.addColorStop(1, 'rgb(16,25,58)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 7;
      this.ctx.strokeText(text, x, y);
    }

    //銀
    {
      const grad = this.ctx.createLinearGradient(0, y - 80, 0, y);
      grad.addColorStop(0, 'rgb(245,246,248)');
      grad.addColorStop(0.15, 'rgb(255,255,255)');
      grad.addColorStop(0.35, 'rgb(195,213,220)');
      grad.addColorStop(0.5, 'rgb(160,190,201)');
      grad.addColorStop(0.51, 'rgb(160,190,201)');
      grad.addColorStop(0.52, 'rgb(196,215,222)');
      grad.addColorStop(1.0, 'rgb(255,255,255)');
      this.ctx.fillStyle = grad;
      this.ctx.fillText(text, x, y - 3);
    }
    const textWH = this.ctx.measureText(text);
    this.actualWidth.bottom = textWH.width + x;
    if (!this.config.single) {
      this.actualHeight = 120 + y;
    } else {
      this.actualHeight = this.fixedHeight - 20;
    }
  }

  redrawBottom_rainbow(text: string, x: number, y: number, bgColor: BGColor) {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.font = '100px notoserifbk';

    if (bgColor === `white`) {
      this.ctx.fillStyle = bgColor;
      this.ctx.fillRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
    } else if (bgColor === `transparent`) {
      this.ctx.clearRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
    } else if (bgColor === `debug`) {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
    }
    if (this.config.single) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
      this.ctx.strokeStyle = "#000";
      this.ctx.lineWidth = 22;
      this.ctx.strokeText(text, x + 5, y + 2);
    }

    // 銀
    {
      const grad = this.ctx.createLinearGradient(0, y - 80, 0, y + 18);
      grad.addColorStop(0, 'rgb(0,15,36)');
      grad.addColorStop(0.25, 'rgb(250,250,250)');
      grad.addColorStop(0.5, 'rgb(150,150,150)');
      grad.addColorStop(0.75, 'rgb(55,58,59)');
      grad.addColorStop(0.85, 'rgb(25,20,31)');
      grad.addColorStop(0.91, 'rgb(240,240,240)');
      grad.addColorStop(0.95, 'rgb(166,175,194)');
      grad.addColorStop(1, 'rgb(50,50,50)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 19;
      this.ctx.strokeText(text, x + 5, y + 2);
    }

    //黒色
    {
      this.ctx.strokeStyle = "#10193A";
      this.ctx.lineWidth = 17;
      this.ctx.strokeText(text, x, y);
    }

    // 白
    {
      this.ctx.strokeStyle = "#DDD";
      this.ctx.lineWidth = 8;
      this.ctx.strokeText(text, x, y);
    }

    //紺
    {
      const grad = this.ctx.createLinearGradient(0, y - 80, 0, y);
      grad.addColorStop(0, 'rgb(16,25,58)');
      grad.addColorStop(0.03, 'rgb(255,255,255)');
      grad.addColorStop(0.08, 'rgb(16,25,58)');
      grad.addColorStop(0.2, 'rgb(16,25,58)');
      grad.addColorStop(1, 'rgb(16,25,58)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 7;
      this.ctx.strokeText(text, x, y);
    }

    //銀
    {
      const grad = this.ctx.createLinearGradient(0, y - 80, 0, y);
      grad.addColorStop(0, 'red');
      grad.addColorStop(0.25, 'yellow');
      grad.addColorStop(0.5, 'green');
      grad.addColorStop(0.75, 'blue');
      grad.addColorStop(1.0, 'violet');
      this.ctx.fillStyle = grad;
      this.ctx.fillText(text, x, y - 3);
    }
    const textWH = this.ctx.measureText(text);
    this.actualWidth.bottom = textWH.width + x;
    if (!this.config.single) {
      this.actualHeight = 120 + y;
    } else {
      this.actualHeight = this.fixedHeight;
    }
  }

  redrawImage(x: number, y: number, bgColor: BGColor, callback?: VoidFunction) {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);

    switch (bgColor) {
      case `white`:
        this.ctx.fillStyle = `white`;
        this.ctx.fillRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
      case `transparent`:
        this.ctx.clearRect(0, 130, this.ctx.canvas.width, this.ctx.canvas.height / 2 + 10);
        break;
      case 'debug':
        //todo
        break
    }

    if (this.logo.isLoaded()) {
      this.logo.drawTo(this.ctx, x, y);
    } else {
      this.logo.self.onload = function () {
        this.logo.drawTo(this.ctx, x, y);
        if (callback) callback();
      }.bind(this);
    }

    this.actualWidth.bottom = 370 + x;
    this.actualHeight = 200 + y;

    if (callback) callback();
  }

  save() {
    const width = Math.max(this.actualWidth.top, this.actualWidth.bottom);
    //const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height / 4;
    this.generator.save(width, height);
  }

  createBuffer(t: ExportFormat) {
    const width = Math.max(this.actualWidth.top, this.actualWidth.bottom);
    //const height = this.ctx.canvas.height / 4;
    const height = this.actualHeight - 60;
    return this.generator.createBuffer(width, height, t);
  }
}

import { Canvas } from "skia-canvas";
import type { CanvasRenderingContext2D, ExportFormat } from "skia-canvas";


export class Generator {
  ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }
  save(width: number, height: number) {
    const data = this.ctx.getImageData(0, 0, width, height);
    const canvas_width = data.width;
    const canvas_height = data.height - 10;
    const canvas = new Canvas(canvas_width, canvas_height);
    const ctx = canvas.getContext('2d');
    ctx.putImageData(data, 0, 0);

    canvas.saveAsSync(__dirname + '/test.png', {
      format: 'png'
    })
  }
  createBuffer(width: number, height: number, t: ExportFormat) {
    const data = this.ctx.getImageData(0, 0, width, height);
    const canvas_width = data.width;
    const canvas_height = data.height - 10;
    const canvas = new Canvas(canvas_width, canvas_height);
    const ctx = canvas.getContext('2d');
    ctx.putImageData(data, 0, 0);

    // let quality = q;
    // if (quality < 0) {
    //   quality = 10;
    // }
    // if (quality > 100) {
    //   quality = 100;
    // }
    // const encodeOption: {
    //   quality?: number,
    //   compressionLevel?: number
    // } = {};
    // if (t === 'jpeg') {
    //   encodeOption.quality = quality ? quality / 100 : 0.8

    // } else if (t === 'png') {
    //   encodeOption.compressionLevel = quality ? Math.floor((quality / 100) * 10) : 10
    // }
    return canvas.toBufferSync(t)
  }
}

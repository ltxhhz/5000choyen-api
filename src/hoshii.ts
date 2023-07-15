import { join } from 'path';
import { Image } from 'skia-canvas';
import type { CanvasRenderingContext2D } from 'skia-canvas'

export class Hoshii {
  self: Image
  constructor() {
    this.self = new Image()
    this.self.src = join(__dirname, '../images/hoshii.png')
  }
  isLoaded() {
    if (!this.self.complete) return false
    if (typeof this.self.naturalWidth != 'undefined' && this.self.naturalWidth == 0) return false
    return true
  }
  drawTo(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(this.self, x + 5, y + 2)
  }
}

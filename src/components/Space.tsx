import { useEffect, useRef } from "react";

class Star {
  protected x: number;
  protected y: number;
  protected z: number;
  protected canvas: HTMLCanvasElement;
  protected starsParams;
  protected canvasCtx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) {
    this.canvasCtx = canvasCtx;
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;
    this.starsParams = { speed: 15, extinction: 4 };
  }

  move() {
    this.z -= this.starsParams.speed;
    if (this.z <= 0) {
      this.z = this.canvas.width;
    }
  }

  show() {
    let x, y, rad, opacity;
    x = (this.x - this.canvas.width / 2) * (this.canvas.width / this.z);
    x = x + this.canvas.width / 2;
    y = (this.y - this.canvas.height / 2) * (this.canvas.width / this.z);
    y = y + this.canvas.height / 2;
    rad = this.canvas.width / this.z / 2;
    opacity =
      rad > this.starsParams.extinction
        ? 1.5 * (2 - rad / this.starsParams.extinction)
        : 1;

    this.canvasCtx.beginPath();
    this.canvasCtx.fillStyle = `rgba(255, 255, ${rad / Math.PI * 127+128}, ${opacity} )`;
    this.canvasCtx.arc(x, y, rad, 0, Math.PI * 2);
    this.canvasCtx.fill();
  }
}

class SpaceArea {
  protected stars: Star[];
  protected canvas: HTMLCanvasElement;
  protected canvasCtx: CanvasRenderingContext2D;
  protected animationId?: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.stars = [];
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvasCtx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    for (let i = 0; i < 300; i++) {
      this.stars[i] = new Star(this.canvas, this.canvasCtx);
    }
    this.update();
  }

  update() {
    this.canvasCtx.fillStyle = "black";
    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.stars.forEach(function (s) {
      s.show();
      s.move();
    });
    this.animationId = window.requestAnimationFrame(this.update.bind(this));
  }

  stop() {
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }
    this.stars = [];
  }
}
let spaceArea: SpaceArea;

const Space = ({ className }: { className: string }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current) {
      spaceArea = new SpaceArea(canvasEl.current);
    }
    window.onresize = function () {
      if (spaceArea) {
        spaceArea.stop();
      }
      if (canvasEl.current && spaceArea) {
        spaceArea = new SpaceArea(canvasEl.current);
      }
    };
  }, []);
  return <canvas className={className} ref={canvasEl}></canvas>;
};

export default Space;

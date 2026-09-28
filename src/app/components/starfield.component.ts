import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

type Star = {
  x: number;
  y: number;
  z: number;
  pz: number;
};

@Component({
  selector: 'app-starfield',
  standalone: true,
  template: `
    <canvas
      #canvas
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 -z-10 hidden opacity-70 dark:block"
    ></canvas>
  `,
})
export class StarfieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private animationId = 0;
  private width = 0;
  private height = 0;
  private stars: Star[] = [];
  private readonly starCount = 180;
  private readonly speed = 0.35;
  private readonly onResize = () => this.resize();

  ngAfterViewInit(): void {
    this.resize();
    this.draw();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.onResize);
  }

  private createStar(): Star {
    const z = Math.random() * this.width;
    return {
      x: (Math.random() - 0.5) * this.width,
      y: (Math.random() - 0.5) * this.height,
      z,
      pz: z,
    };
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = this.width * dpr;
    canvas.height = this.height * dpr;
    canvas.style.width = `${this.width}px`;
    canvas.style.height = `${this.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.stars = Array.from({ length: this.starCount }, () => this.createStar());
  }

  private draw = (): void => {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'rgba(11, 15, 25, 0.35)';
    ctx.fillRect(0, 0, this.width, this.height);

    const cx = this.width / 2;
    const cy = this.height / 2;

    for (const star of this.stars) {
      star.pz = star.z;
      star.z -= this.speed;

      if (star.z <= 1) {
        Object.assign(star, this.createStar());
        star.z = this.width;
        star.pz = star.z;
      }

      const sx = (star.x / star.z) * this.width + cx;
      const sy = (star.y / star.z) * this.height + cy;
      const px = (star.x / star.pz) * this.width + cx;
      const py = (star.y / star.pz) * this.height + cy;
      const size = Math.max(0.2, (1 - star.z / this.width) * 2.2);

      ctx.beginPath();
      ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 + (1 - star.z / this.width) * 0.55})`;
      ctx.lineWidth = size;
      ctx.moveTo(px, py);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = `rgba(226, 232, 240, ${0.25 + (1 - star.z / this.width) * 0.6})`;
      ctx.arc(sx, sy, size * 0.55, 0, Math.PI * 2);
      ctx.fill();
    }

    this.animationId = requestAnimationFrame(this.draw);
  };
}

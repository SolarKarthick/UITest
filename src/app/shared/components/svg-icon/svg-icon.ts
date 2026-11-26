import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { menuIconMeta, menuSvg } from '../../../layout/component/app.menu-svgs';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="app-svg-icon"
      [class.app-svg-chip]="chip"
      [class.app-svg-sm]="size === 'sm'"
      [class.app-svg-lg]="size === 'lg'"
      [class.app-svg-xl]="size === 'xl'"
      [class.app-svg-soft]="soft"
      [attr.data-icon]="name"
      [style.color]="meta.color"
      [style.--svg-chip-bg]="chip ? meta.bg : 'transparent'"
      [style.background]="chip ? (soft ? null : meta.bg) : 'transparent'"
      [innerHTML]="html"
    ></span>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
      .app-svg-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: currentColor;
      }
      .app-svg-icon svg {
        width: 1.15rem;
        height: 1.15rem;
        display: block;
      }
      .app-svg-sm svg {
        width: 0.95rem;
        height: 0.95rem;
      }
      .app-svg-lg svg {
        width: 1.35rem;
        height: 1.35rem;
      }
      .app-svg-xl svg {
        width: 1.55rem;
        height: 1.55rem;
      }
      .app-svg-chip {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.85rem;
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
      }
      .app-svg-chip.app-svg-sm {
        width: 2rem;
        height: 2rem;
        border-radius: 0.7rem;
      }
      .app-svg-chip.app-svg-lg {
        width: 3rem;
        height: 3rem;
        border-radius: 0.95rem;
      }
      .app-svg-chip.app-svg-xl {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 1.1rem;
      }
      .app-svg-soft.app-svg-chip {
        background:
          linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.55)),
          var(--svg-chip-bg, #eef2ff);
        box-shadow:
          0 10px 22px rgba(79, 70, 229, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.9),
          inset 0 0 0 1px rgba(99, 102, 241, 0.12);
      }
    `
  ]
})
export class SvgIcon implements OnChanges {
  @Input() name: any = 'home';
  @Input() chip: any = true;
  @Input() size: any = 'md';
  /** Softer glass-style chip — preferred on landing cards */
  @Input() soft: any = false;

  meta: any = menuIconMeta('home');
  html: any;

  constructor(private sanitizer: DomSanitizer) {
    this.refresh();
  }

  ngOnChanges(): void {
    this.refresh();
  }

  private refresh(): void {
    this.meta = menuIconMeta(this.name);
    this.html = this.sanitizer.bypassSecurityTrustHtml(menuSvg(this.name));
  }
}

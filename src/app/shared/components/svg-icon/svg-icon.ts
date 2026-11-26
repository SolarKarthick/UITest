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
      [attr.data-icon]="name"
      [style.color]="meta.color"
      [style.background]="chip ? meta.bg : 'transparent'"
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
        width: 1.1rem;
        height: 1.1rem;
        display: block;
      }
      .app-svg-sm svg {
        width: 0.95rem;
        height: 0.95rem;
      }
      .app-svg-lg svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .app-svg-chip {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.75rem;
        box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
      }
      .app-svg-chip.app-svg-sm {
        width: 2rem;
        height: 2rem;
        border-radius: 0.65rem;
      }
      .app-svg-chip.app-svg-lg {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.85rem;
      }
    `
  ]
})
export class SvgIcon implements OnChanges {
  @Input() name: any = 'home';
  @Input() chip: any = true;
  @Input() size: any = 'md';

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

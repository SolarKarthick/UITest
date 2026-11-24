import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="mb-5">
      <a
        routerLink="/app/dashboard"
        class="mb-2 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 no-underline hover:text-indigo-800"
      >
        ← Back to Dashboard
      </a>
      <h1 class="m-0 text-xl font-bold text-slate-900 sm:text-2xl">{{ title }}</h1>
      @if (subtitle) {
        <p class="mt-1 m-0 text-sm text-slate-500">{{ subtitle }}</p>
      }
    </div>
  `
})
export class DetailPageHeader {
  @Input() title: any = '';
  @Input() subtitle: any = '';
}

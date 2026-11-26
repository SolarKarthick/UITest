import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-activity-widget',
  standalone: true,
  imports: [CommonModule, SvgIcon],
  templateUrl: './activity-widget.html',
  styleUrl: './activity-widget.scss'
})
export class ActivityWidget {
  items: any = DEMO.activity;
}

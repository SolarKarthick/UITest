import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-referral-users-widget',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule],
  templateUrl: './referral-users-widget.html',
  styleUrl: './referral-users-widget.scss'
})
export class ReferralUsersWidget {
  users: any = DEMO.referralUsers;

  statusSeverity(status: any): any {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warn';
    return 'secondary';
  }

  initials(name: any): any {
    return String(name || '')
      .split(' ')
      .map((part: any) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}

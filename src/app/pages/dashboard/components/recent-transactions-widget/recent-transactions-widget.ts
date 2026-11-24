import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-recent-transactions-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, TagModule, SvgIcon],
  templateUrl: './recent-transactions-widget.html',
  styleUrl: './recent-transactions-widget.scss'
})
export class RecentTransactionsWidget {
  /** Preview only — full list is on the transactions detail page. */
  transactions: any = DEMO.transactions.slice(0, 5);

  statusSeverity(status: any): any {
    if (status === 'Completed') return 'success';
    if (status === 'Pending') return 'warn';
    return 'danger';
  }

  typeSvg(type: any): any {
    if (type === 'Pay-in' || type === 'Deposit') return 'pay-in';
    if (type === 'Pay-out' || type === 'Withdrawal') return 'pay-out';
    if (type === 'Investment Return') return 'chart';
    return 'referral';
  }

  amountClass(type: any): any {
    return type === 'Pay-out' || type === 'Withdrawal' ? 'text-slate-700' : 'text-indigo-700';
  }

  amountPrefix(type: any): any {
    return type === 'Pay-out' || type === 'Withdrawal' ? '-' : '+';
  }
}

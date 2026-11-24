import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SvgIcon } from '../../../../shared/components/svg-icon/svg-icon';
import { DetailPageHeader } from '../../components/detail-page-header/detail-page-header';
import { DEMO } from '../../data/investment-dashboard.mock';

@Component({
  selector: 'app-transactions-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, TagModule, SelectButtonModule, SvgIcon, DetailPageHeader],
  templateUrl: './transactions-detail.html',
  styleUrl: './transactions-detail.scss'
})
export class TransactionsDetail implements OnInit {
  data: any = DEMO;
  filter: any = 'All';
  locked: any = false;
  title: any = 'Transaction History';
  subtitle: any = 'All Pay-in, Pay-out, investment returns, and referral credits in one place.';
  filterOptions: any = [
    { label: 'All', value: 'All' },
    { label: 'Pay-in', value: 'Pay-in' },
    { label: 'Pay-out', value: 'Pay-out' },
    { label: 'Returns', value: 'Investment Return' },
    { label: 'Referral', value: 'Referral Earnings' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((d: any) => {
      if (d?.txType) {
        this.filter = d.txType;
        this.locked = true;
        this.title = d.title || d.txType;
        this.subtitle = d.subtitle || '';
      } else {
        this.filter = 'All';
        this.locked = false;
        this.title = 'Transaction History';
        this.subtitle = 'All Pay-in, Pay-out, investment returns, and referral credits in one place.';
      }
    });
  }

  get rows(): any {
    if (this.filter === 'All') return this.data.transactions;
    return this.data.transactions.filter((t: any) => t.type === this.filter);
  }

  get totalAmount(): any {
    return this.rows.reduce((sum: any, row: any) => sum + (row.amount || 0), 0);
  }

  statusSeverity(status: any): any {
    if (status === 'Completed') return 'success';
    if (status === 'Pending') return 'warn';
    return 'danger';
  }

  typeSvg(type: any): any {
    if (type === 'Pay-in') return 'pay-in';
    if (type === 'Pay-out') return 'pay-out';
    if (type === 'Investment Return') return 'chart';
    return 'referral';
  }

  amountClass(type: any): any {
    return type === 'Pay-out' ? 'text-slate-700' : 'text-indigo-700';
  }

  amountPrefix(type: any): any {
    return type === 'Pay-out' ? '-' : '+';
  }
}

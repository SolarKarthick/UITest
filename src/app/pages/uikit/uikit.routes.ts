import { Routes } from '@angular/router';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { HelpCenter } from './help-center/help-center';

export default [
    { path: 'help-center', data: { breadcrumb: 'Help Center' }, component: HelpCenter },
    { path: 'privacy-policy', data: { breadcrumb: 'Privacy Policy' }, component: PrivacyPolicy },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

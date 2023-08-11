import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      // { path: '', loadChildren: () => import('./home.module/home.module').then(m => m.HomeModule), pathMatch: 'full' },
      { path: 'appointments', loadChildren: () => import('./appointments.module/appointments.module').then(m => m.AppointmentsModule) },
      { path: 'schedule', loadChildren: () => import('./schedule.module/schedule.module').then(m => m.ScheduleModule) },
      { path: 'timings', loadChildren: () => import('./timings.module/timings.module').then(m => m.TimeingsModule) },
      { path: 'settings', loadChildren: () => import('./settings.module/settings.module').then(m => m.SettingsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

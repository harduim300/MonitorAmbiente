import { MeterComponent } from './meter/meter.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { PlotComponent } from './plot/plot.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'temper',
    pathMatch: 'full',
  },
  {
    path: 'temper',
    component: MeterComponent,
  },
  {
    path: 'humit',
    component: MeterComponent,
  },
  {
    path:'plot',
    component: PlotComponent,
  },
  {
    path:'info',
    component: InfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

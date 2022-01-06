import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MeterComponent } from './meter/meter.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { InfoComponent } from './info/info.component';
import { PlotComponent } from './plot/plot.component';
import { RealtimeChartModule } from "ngx-graph";
import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MeterComponent,
    InfoComponent,
    PlotComponent,
  ],
  imports: [
    RealtimeChartModule,
    AppRoutingModule,
    NgxGaugeModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

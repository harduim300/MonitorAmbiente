import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from "rxjs";
import { timeInterval } from "rxjs/operators";
import { RealtimeChartOptions } from "ngx-graph";
import { DataService } from '../data.service';
import Monitor from '../shared/models/monitor-model';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit, OnDestroy {

  monitor: Monitor = {
    'temperature': 0,
    'humity': 0,
  };

  realtimeChartOptionsTemp: RealtimeChartOptions = {
    height: 300,
    margin: { left: 40 },
    lines: [
      {
        color: "#A51B0B",
        lineWidth: 3,
        area: true,
        areaColor: "#A51B0B",
        areaOpacity: 0.2
      }
    ],
    xGrid: { tickPadding: 15, tickNumber: 5 },
    yGrid: {
      min: 0,
      max: 100,
      tickNumber: 5,
      tickFormat: v => `${v}°C`,
      tickPadding: 25
    }
  };
  realtimeChartOptionsHumity: RealtimeChartOptions = {
    height: 300,
    margin: { left: 40 },
    lines: [
      {
        color: "#0083FF",
        lineWidth: 3,
        area: true,
        areaColor: "#0083FF",
        areaOpacity: 0.2
      }
    ],
    xGrid: { tickPadding: 15, tickNumber: 5 },
    yGrid: {
      min: 0,
      max: 100,
      tickNumber: 5,
      tickFormat: v => `${v}%`,
      tickPadding: 25
    }
  };

  constructor(private data: DataService) {}
  realtimeChartDataTemp = [
    [...this.data.generateInitRealtimeData()]
  ];
  realtimeChartDataHumit = [
    [...this.data.generateInitRealtimeData()]
  ];
  ngOnInit(): void {
    // push new value to real-time chart every second (example)

    this.data.connectServer()

    interval(1000)
    .pipe(timeInterval())
    .subscribe(() => {
      if (typeof this.data.monitorDataService != "undefined") {
        this.monitor = this.data.monitorDataService
      }
      this.realtimeChartDataTemp[0].push({
        date: new Date(),
        value: this.monitor.temperature,
      });
      this.realtimeChartDataHumit[0].push({
        date: new Date(),
        value: this.monitor.humity,
      });
    });


    }

    ngOnDestroy(){
      this.data.disconnectServer();
    }

}

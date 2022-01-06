import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit, DoCheck, OnDestroy {


  constructor(private router: Router,private data: DataService) { }

  name = "";
  gaugeValue = 0;
  gaugeAppendText = "";
  gaugeForegroundColor = "";
  gaugeThick = 12;



  readonly path = this.router.url.endsWith("temper");
  ngOnInit(): void {


    this.data.connectServer();

    if(this.path){
      this.name = 'Temperatura'
      this.gaugeValue = 0.0;
      this.gaugeAppendText = '°C';
      this.gaugeForegroundColor = "#A51B0B";
    }
    else{
      this.name = 'Umidade'
      this.gaugeValue = 0.0;
      this.gaugeAppendText = '%';
      this.gaugeForegroundColor = "#0083FF"
    }

  }
  ngDoCheck() {

    var temperature = this.data.monitorDataService?.temperature;
    var humity = this.data.monitorDataService?.humity
    
    try {
      if(this.path){
        this.gaugeValue = temperature
      }
      else{
        this.gaugeValue = humity;
      }
    } catch (error) {
      console.log(error)
    }

  }
  ngOnDestroy() {
    
    this.data.disconnectServer();
  }


}

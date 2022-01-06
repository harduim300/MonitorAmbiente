import { Injectable } from "@angular/core";
import { subSeconds } from "date-fns";
import Monitor from "./shared/models/monitor-model";

var socket = new WebSocket("ws://127.0.0.1:8000/ws/data");

@Injectable({
  providedIn: "root"
})
export class DataService {

  monitorDataService: Monitor;

  constructor(){ }

  // this function creates the init array with 0 
  generateInitRealtimeData(
    n: number = 60,
    step: number = 1,
    min: number = 0,
    max: number = 100,
    date = new Date()
  ): { date: Date; value: number }[] {
    return Array.from(Array(n).keys())
      .map((_, i) => ({
        date: subSeconds(date, i * step),
        value: 0
      }))
      .reverse();
  }

  connectServer() {
    // create conection with websocket
    if(socket.readyState == socket.CLOSED){
      socket = new WebSocket("ws://127.0.0.1:8000/ws/data");
    }

    socket.onmessage = (event) => {
    // active the function receive of django
        var data = JSON.parse(event.data)
        socket.send("NEEDNEWDATA")
        this.monitorDataService = data
    }

  }
  disconnectServer(){
    // disconnect of websocket
    socket.onmessage = () => {
      socket.close();
    }

  }
}

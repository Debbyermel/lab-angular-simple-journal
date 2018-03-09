import { Component, OnInit } from '@angular/core';
import { JournalService } from './services/journal.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  drones;

  constructor(private service:JournalService){}

  ngOnInit(){ }
}



  //   //promises
  //   this.service.getAllDrones() 
  //   .then(drones=>{
  //     this.drones = drones;
  //   })
    
  //   //obserblblbs
  //   this.service.getFrieDrones()
  //   .subscribe(drones=>{
  //     this.drones = drones;
  //   })

  // }
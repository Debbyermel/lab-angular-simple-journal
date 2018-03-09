import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers:[JournalService]
})
export class SingleEntryComponent implements OnInit {

  constructor(private journaltwo: JournalService){}

  ngOnInit() {}

  single: Array<Object> 
  
//   getSingleEntry(id) {
//   this.journaltwo.getSingleEntry(id)
//     .map(respost => {
//       this.single = single;
//     })
  
// }
}

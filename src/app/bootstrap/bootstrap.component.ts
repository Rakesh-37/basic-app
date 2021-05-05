import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  comments=[];
//inject data service object
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getData().subscribe(
      
    )
    
  }

}

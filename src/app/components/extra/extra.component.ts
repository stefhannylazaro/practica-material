import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  public fecha;
  constructor() {}

  ngOnInit() {
    this.fecha=new Date(2019,11,1);
  }

}

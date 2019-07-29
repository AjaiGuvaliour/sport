import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-sport',
  templateUrl: './manage-sport.component.html',
  styleUrls: ['./manage-sport.component.scss'],
})
export class ManageSportComponent implements OnInit {

  dataList: any=[1,2,3,4]
  constructor() { }

  ngOnInit() {}

}

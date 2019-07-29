import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {


  forms:FormGroup;
  constructor(private fb : FormBuilder) {
    this.forms=this.fb.group({
      userName:['']
    })
   }
  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-otp-gen',
  templateUrl: './otp-gen.component.html',
  styleUrls: ['./otp-gen.component.scss'],
})
export class OtpGenComponent implements OnInit {

 
  forms:FormGroup;
  constructor(private fb : FormBuilder) {
    this.forms=this.fb.group({
      otpForm:['']
    })
   }
  
  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  forms:FormGroup;
  constructor(private fb : FormBuilder) {
    this.forms=this.fb.group({
       userName:['']
    })
   }
  
  ngOnInit() {}

}

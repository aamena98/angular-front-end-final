import { Component, OnInit } from '@angular/core';
import { sendMail } from '../../../Classes/sendMail';
import { LoginserviceService } from '../Services/loginservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _ser:LoginserviceService) { }

  ngOnInit() {
  }
  onforget()
  {

  }
  oncancel()
  {

  }
}

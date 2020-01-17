import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-business-development',
  templateUrl: './business-development.component.html',
  styleUrls: ['./business-development.component.css']
})
export class BusinessDevelopmentComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

}

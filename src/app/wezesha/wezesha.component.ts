import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-wezesha',
  templateUrl: './wezesha.component.html',
  styleUrls: ['./wezesha.component.css']
})
export class WezeshaComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}

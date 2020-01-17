import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-solution-last',
  templateUrl: './solution-last.component.html',
  styleUrls: ['./solution-last.component.css']
})
export class SolutionLastComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

}

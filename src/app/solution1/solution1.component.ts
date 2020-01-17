import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.css']
})
export class Solution1Component implements OnInit {

  constructor(private spinner: NgxSpinnerService) {

  }
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}

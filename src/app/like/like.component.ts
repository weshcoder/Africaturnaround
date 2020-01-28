import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'like-box',
  templateUrl: 'like.component.html',
  styleUrls: [ './like.component.css' ]
})
export class LikeComponent  {
  numberOfLikes = 0;

  likeButtonClick() {
    this.numberOfLikes += 1;
  }


  dislikeButtonClick() {
    this.numberOfLikes--;
  }
}

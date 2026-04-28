import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

    mainImg = "/images/dragon.jpg"
    imgH2 = "Här är en skäggagam"
    imgH3 = "Han är inte arg, han har bara resting-angry-face."
    imgP = "tror jag..."

    showButton = true;

    changeImg(): void  {
      this.mainImg = "/images/happygoat.jpg"
      this.imgH2 = "En glad get!"
      this.imgH3 = "Han ser betydligt gladare ut."
      this.imgP = ""

      this.showButton = false;
    }
}

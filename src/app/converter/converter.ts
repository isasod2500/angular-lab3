import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrls: ['./converter.css'],
})
export class Converter {
  tempChoice = "toFahren"
  tempInput = ""
  tempResult = ""

  distChoice = "toFeet"
  distInput = ""
  distResult = ""
  convertTemp(): void {
    if (this.tempChoice === "toFahren") {
      this.tempResult = `${(Number(this.tempInput) * 1.8 + 32).toFixed(2)} F`

    } else {
      this.tempResult = `${((Number(this.tempInput) - 32) / 1.8).toFixed(2)} °C`

    }
  }

   convertDist(): void {
    if(this.distChoice === "toMeters") {
      this.distResult = `${(Number(this.distInput) * 0.3048).toFixed(2)} Meter`
    } else {
      this.distResult = `${(Number(this.distInput) * 3.28084).toFixed(2)} Fot`
    }
  }

}

import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {
  tempChoice = ""
  tempInput = ""
  tempResult = ""

  distChoice = ""
  distInput = ""
  distResult = ""
  convertTemp(): void {
    if (this.tempChoice === "toFahren") {
      this.tempResult = `${(Number(this.tempInput) * 1.8 + 32).toFixed(2)} F`

    } if (this.tempChoice === "toCelsius") {
      this.tempResult = `${((Number(this.tempInput) - 32) / 1.8).toFixed(2)} °C`

    }
  }

   convertDist(): void {
    if(this.distChoice === "toMeters") {
      this.distResult = `${(Number(this.distInput) * 0.3048).toFixed(2)} Meter`
    } if(this.distChoice === "toFeet") {
      this.distResult = `${(Number(this.distInput) * 3.28084).toFixed(2)} Fot`
    }
  }

}

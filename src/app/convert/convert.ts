import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Converter } from '../converter/converter';

@Component({
  selector: 'app-convert',
  imports: [FormsModule, Converter],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {}

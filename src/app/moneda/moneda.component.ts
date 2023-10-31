import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ScrollingModule, MatRadioModule, FormsModule, NgFor]
})
export class MonedaComponent {
  
  favoriteSeason: string | undefined;
  seasons: string[] = ['Hogar', 'Alquileres', 'Comida', 'Mascota', 'Etc.'];
}



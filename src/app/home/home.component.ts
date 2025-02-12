import { Component } from '@angular/core';
import { TypewriterComponent } from '../typewriter/typewriter.component';

@Component({
  selector: 'app-home',
  imports: [TypewriterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

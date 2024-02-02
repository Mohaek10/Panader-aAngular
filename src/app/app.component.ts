import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FurmularioComponent} from "./furmulario/furmulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FurmularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Panaderia';
  
}

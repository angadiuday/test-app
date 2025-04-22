import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { TestFormsComponent } from './test-forms/test-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';
}

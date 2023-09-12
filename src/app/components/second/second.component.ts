import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ng-content select="[head], [cabeza]"></ng-content>
  <h2>This is Second, hello my friend</h2>
  <ng-content select="[foot], [pie]"></ng-content>
`,
  styles: [],
})
export class SecondComponent {}

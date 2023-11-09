import { Component } from "@angular/core";

@Component({
  selector: 'app-anatomy-of-a-component',
  template: `
    Hello George Alan Rufo
  `,
  styles: `
    :host {
      color: blue;
    }
  `,
  standalone: true,
})

export class AnatomyOfAComponent {}
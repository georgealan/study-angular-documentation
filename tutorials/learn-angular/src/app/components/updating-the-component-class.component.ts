import { Component } from "@angular/core";

@Component({
  selector: 'app-updating-the-component-class',
  template: `
    Hello {{ city }}, {{ 1 + 1 }}
  `,
  standalone: true,
})

export class UpdatingTheComponentClass {
  city = 'Sao Paulo';
}
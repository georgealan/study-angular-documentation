import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-component-composition',
  template: `<section><app-user /></section>`,
  standalone: true,
  imports: [UserComponent],
})
export class ComponentComposition {}

/*
The selector property of the component configuration gives you a name to use when 
referencing the component in another template. You use the selector like an HTML tag, 
for example app-user would be <app-user /> in the template.
*/
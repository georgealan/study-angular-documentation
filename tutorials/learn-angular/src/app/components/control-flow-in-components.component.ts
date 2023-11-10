import { Component } from "@angular/core";

@Component({
  selector: 'app-control-flow',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
  standalone: true,
})
export class ControlFlowInComponents {
  isServerRunning = false;
}
import { Routes } from '@angular/router';

import { IntroductionComponent } from './components/introduction.component';
import { AnatomyOfAComponent } from './components/anatomy-of-a-component.component';
import { UpdatingTheComponentClass } from './components/updating-the-component-class.component';
import { ComponentComposition } from './components/component-composition.component';
import { ControlFlowInComponents } from './components/control-flow-in-components.component';
import { ControlFlowFor } from './components/control-flow-for.component'; 

export const routes: Routes = [
  {
    path: 'introduction',
    title: 'Introduction Page',
    component: IntroductionComponent,
  },
  {
    path: 'anatomy-of-a-component',
    title: 'App Anatomy of a Component',
    component: AnatomyOfAComponent,
  },
  {
    path: 'updating-the-component-class',
    title: 'Updating the Component Class',
    component: UpdatingTheComponentClass,
  },
  {
    path: 'component-composition',
    title: 'Component Composition',
    component: ComponentComposition,
  },
  {
    path: 'control-flow-in-components',
    title: 'Control Flow in Components',
    component: ControlFlowInComponents,
  },
  {
    path: 'control-flow-for',
    title: 'Control Flow For',
    component: ControlFlowFor,
  },
];

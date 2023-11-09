import { Routes } from '@angular/router';

import { IntroductionComponent } from './components/introduction.component';
import { AnatomyOfAComponent } from './components/anatomy-of-a-component.component';
import { UpdatingTheComponentClass } from './components/updating-the-component-class.component';
import { ComponentComposition } from './components/component-composition.component';

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
];

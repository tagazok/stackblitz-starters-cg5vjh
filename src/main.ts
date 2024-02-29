import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterOutlet,
  Routes,
  withViewTransitions,
} from '@angular/router';
import 'zone.js';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
})
export class App {}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes, withViewTransitions())],
});

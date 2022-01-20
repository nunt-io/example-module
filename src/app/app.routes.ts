import {Routes} from '@angular/router';
import {ShowcaseComponent} from "./showcase/showcase.component";

export const routes: Routes = [
  {path: '', component: ShowcaseComponent},
  {path: '**', component: ShowcaseComponent}
];
export const routeComponents = getRouteComponents(routes);

export function getRouteComponents(routes: Routes, routeComponents: any[] = []): any {
  routes.forEach(route => {
    if (route.component) {
      routeComponents.push(route.component);
    }

    if (route.children) {
      getRouteComponents(route.children, routeComponents);
    }
  });

  return routeComponents;
}

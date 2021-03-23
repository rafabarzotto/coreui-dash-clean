import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

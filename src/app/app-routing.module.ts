import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpaceComponentComponent} from './Modules/space-component/space-component.component';
import {HomeComponentComponent} from './Modules/home-component/home-component.component';

const routes: Routes = [{
  path: '', component: HomeComponentComponent,
},
{
  path: 'space', component: SpaceComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

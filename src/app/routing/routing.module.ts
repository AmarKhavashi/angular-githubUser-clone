import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContactComponent } from '../contact/contact.component';
import { GithubComponent } from '../github/github.component';


const routes:Routes=[
  {path:"",component:GithubComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';

const routes: Routes = [
   {
    path:"home",component:HomeComponent
   },
   {
    path:"about",component:AboutComponent,canActivate:[AuthService]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

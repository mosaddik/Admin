import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';



/* routing start with login page */
/* routed to page module */

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'Login' },
  {
    path: '',
    loadChildren: () => import('./pages/page.module').then(m => m.PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

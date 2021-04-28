import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';    
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo:'login',
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginPageComponent
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: RegisterPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
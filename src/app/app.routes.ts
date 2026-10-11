import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'welcome',component:Welcome,title:'Wedding Invitation'},
    {path:'register',component:Register,title:'Register'}
];

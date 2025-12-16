import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path:'home',component:Home,title:"Home"},
    {path:'',component:Home,title:'Home' },
    {path:'contact',component:Contact,title:'contact' },
    {path:'portfolio',component:Portfolio,title:'portfolio' },
    {path:'about',component:About,title:'about' },
    {path:'**',component:NotFound ,title:'not found'}
];
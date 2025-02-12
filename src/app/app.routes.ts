import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
];

// This where we create the routes, meaning the URL endpoints
// to access particular components. So routes is an object.
// This first path:"" is the default route. Set redirectTo the path you want.
// In my case, it will redirect to the home page.
// pathMatch:'full' means it will take the full path (e.g., localhost:4200/)

// Notes that this routes is being passed to the app.config.ts file
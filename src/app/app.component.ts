import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SkillsComponent} from './skills/skills.component';
import {TypewriterComponent} from './typewriter/typewriter.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
// import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, SkillsComponent, TypewriterComponent, ProjectsComponent, ContactComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}

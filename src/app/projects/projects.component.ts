// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.css'
// })
// export class ProjectsComponent {
//   projectCards = [
//     {title: 'Savvy Swap', src: 'savvyswap.jpg', alt: 'Savvy Swap', backend:'https://github.com/LeeReyesCS/neighborhood-hack-backend', fronted: 'https://github.com/LeeReyesCS/neighborhood-hack-frontend', showDetailsButton: true },
//     {title: 'Yoga-4-All', src: 'yoga4all.jpg', alt: 'Yoga-4-All', link:'' },
//     {title: 'Inspiration Board', src: 'inspirationboard2.jpg', alt: 'Inspiration Board', link:'' },
//     {title: 'React Chat Log', src: 'reactchatlog.jpg', alt: 'React Chat Log', link:'' },
//     {title: 'Weather Report', src: 'weatherreport1.jpg', alt: 'Weather Report', link:'' },
//     {title: 'More on my Github', src: 'githubrepo.jpg', alt: 'More on My Github', link:'' }
//   ];

// // Function to handle the 'Show Details' button click
// showDetails(card: any) {
//   console.log('Showing details for:', card.title);
//   // You can implement logic to show more info or perform any action
//   }
// }

////NOTES://///
////We can use an array to handle the image data dynamically.
////I created a projectCards array with items of each card/image. 
////The images are dynamically rendered in the HTML with an *ngFor directive.
////But it's not quite working as expected...


////////////////////////////
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}


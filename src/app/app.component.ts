import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:"Nullam eu",
      imageUrl:"assets/images/tree.jpeg",
      content:"Praesent tincidunt cursus vestibulum. Nulla sit amet luctus metus. Proin tristique a mauris eu faucibus. Nam et velit in elit.      "
    },
    {
      title:"Aenean tincidunt",
      imageUrl:"assets/images/biking.jpeg",
      content:"Praesent consequat et nibh nec ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec id ipsum et."
    },
    {
      title:"Donec commodo",
      imageUrl:"assets/images/mountain.jpeg",
      content:"Nam vitae euismod odio, quis euismod neque. Pellentesque id nulla vel erat ultricies rutrum sit amet placerat mi. Nullam ut."
    }
  ]
}

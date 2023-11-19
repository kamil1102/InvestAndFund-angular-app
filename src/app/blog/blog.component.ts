import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service'; 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  posts: any[] = [];

    // The BlogService is injected as a dependency here to keep the component
    // class focused on supporting the view. This service is responsible for
    // data operations such as fetching data form API, which allows for a more maintainable and
    // scalable application structure. By using a service, we folow to the single
    // responsibility principle, as the service's sole purpose is to provide data.
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    // The getMockPosts() method gets mock dat from the service.
    this.blogService.getMockPosts().subscribe(
      (data) => {
        this.posts = data; 
      },
      (error) => {
        console.error('There was an error fetching the blog posts!', error);
      }
    );


  }
  
}

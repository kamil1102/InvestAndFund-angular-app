import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Mock data for company information for blog posts.
const MOCK_POSTS = [
  {
    id: 1,
    title: 'My First Post',
    content: 'This is my first post.',
    author: 'Kamil'
  },
  {
    id: 2,
    title: 'My Second Post',
    content: 'This is my second post.',
    author: 'Kamil'
  },
];

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private apiUrl = ''; //Url address of the endpoint

  constructor(private http: HttpClient) {}

  // This method is intended to make an HTTP GET request
  // to the backend API to fetch the blog posts. 
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // This method returns an Observable of mock blog posts.
  // It uses RxJS 'of' to return the mock data. This is to show the data flow and dispplay it in the comapnents. 
  // before the actual backend API is implemented.
  getMockPosts(): Observable<any[]> {
    return of(MOCK_POSTS);
  }
}

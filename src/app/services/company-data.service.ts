import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Mock data for company information
const MOCK_COMPANY_INFO = {
  name: 'Invest & Fund',
  address: '123 Street, London',
  phone: '(123) 456-7890',
  email: 'i&f@i&f.com'
};

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {  

  private apiUrl = ''; //Url address of the endpoint

  constructor(private http: HttpClient) { }

  // This method is intended to make an HTTP GET request
  // to the backend API to fetch etch company information. 
  getCompanyInfo(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // This method returns an Observable of mock comapny data.
  // It uses RxJS 'of' to return the mock data. This is to show the data flow and dispplay it in the comapnents. 
  // before the actual backend API is implemented.
  getMockCompanyInfo(): Observable<any> {
    // Return mock data as an Observable
    return of(MOCK_COMPANY_INFO);
  }
}

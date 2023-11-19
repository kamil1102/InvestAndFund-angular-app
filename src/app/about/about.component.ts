// src/app/about/about.component.ts
import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../services/company-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  companyInfo: any;

    // The CompanyDataService is injected as a dependency here to keep the component
    // class focused on supporting the view. This service is responsible for
    // data operations such as fetching data form API, which allows for a more maintainable and
    // scalable application structure. By using a service, we folow to the single
    // responsibility principle, as the service's purpose is to provide data.
  constructor(private companyDataService: CompanyDataService) {}

  ngOnInit() {
    // The getMockCompanyInfo() gets mock data from the service. 
    this.companyDataService.getMockCompanyInfo().subscribe(
      (info) => {
        this.companyInfo = info; 
      },
      (error) => {
        console.error('Error fetching company info', error);
      }
    );
  }
}

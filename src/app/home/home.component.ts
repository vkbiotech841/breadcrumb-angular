import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private breadCrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.displayBreadCrumbUrl();
  }


  displayBreadCrumbUrl() {
    this.breadCrumbService.setCurrentPageBreadCrumb([
      { label: 'Home', link: '/home' }
    ])
  };

}

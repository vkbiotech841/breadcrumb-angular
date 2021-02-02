import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadCrumbData: { label: string, link: string }[] = [];

  constructor(
    private breadCrumbService: BreadcrumbService,
    private routerService: Router
  ) { }

  ngOnInit(): void {
    this.breadCrumbService.getBreadCrumbEV().subscribe(breadCrumbData => {
      this.breadCrumbData = breadCrumbData;
      console.log('Bread crumb received', breadCrumbData)
    });
    this.breadCrumbData = this.breadCrumbService.getCurrentBreadCrumb();
  }

  gotoPage(breadCrumbData: { label: string, link: string }) {
    console.log('breadCrumbData', breadCrumbData);
    if (!breadCrumbData.link) {
      return;
    }

    this.routerService.navigateByUrl(breadCrumbData.link);
  }

}

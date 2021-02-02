import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  constructor(
    private breadCrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.displayBreadCrumbUrl();
  }

  displayBreadCrumbUrl() {
    this.breadCrumbService.setCurrentPageBreadCrumb([
      { label: 'Home', link: '/home' },
      { label: 'parent', link: '/home/parent' }
    ])
  };

}

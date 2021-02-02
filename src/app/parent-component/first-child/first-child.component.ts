import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  constructor(
    private breadCrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.displayBreadCrumbUrl();
  }

  displayBreadCrumbUrl() {
    this.breadCrumbService.setCurrentPageBreadCrumb([
      { label: 'Home', link: '/home' },
      { label: 'parent', link: '/home/parent' },
      { label: 'First-Child', link: '/home/parent/first-child' }
    ])
  };

}

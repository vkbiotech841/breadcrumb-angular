import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss']
})
export class ThirdChildComponent implements OnInit {

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
      { label: 'First-Child', link: '/home/parent/first-child' },
      { label: 'Second-Child', link: '/home/parent/first-child/second-child' },
      { label: 'Third-Child', link: '/home/parent/first-child/second-child/third-child' },
    ])
  };
}

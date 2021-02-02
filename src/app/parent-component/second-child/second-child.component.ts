import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {

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
    ])
  };

}

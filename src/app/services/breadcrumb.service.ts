import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private currentPageBreadCrumb: { label: string, link: string }[] = [];
  private breadCrumbEV = new Subject<{ label: string, link: string }[]>();

  constructor() { }

  setCurrentPageBreadCrumb(breadcrumb: { label: string, link: string }[]) {
    console.log('From service', breadcrumb)
    this.currentPageBreadCrumb = breadcrumb;
    this.breadCrumbEV.next(this.currentPageBreadCrumb);
  }

  getBreadCrumbEV() {
    return this.breadCrumbEV.asObservable();
  }

  getCurrentBreadCrumb() {
    return this.currentPageBreadCrumb;
  }

  popBreadCrumb() {
    this.currentPageBreadCrumb.pop();
    this.breadCrumbEV.next(this.currentPageBreadCrumb);
  }

  pushBreadCrumb(breadcrumb: { label: string, link: string }) {
    this.currentPageBreadCrumb.push(breadcrumb);
    this.breadCrumbEV.next(this.currentPageBreadCrumb);
  }

  clearBreadCrumb() {
    this.currentPageBreadCrumb = [];
    this.breadCrumbEV.next(this.currentPageBreadCrumb);
  }


}

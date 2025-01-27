// header-footer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {
  private headerHeightSubject = new BehaviorSubject<number>(0);
  private footerHeightSubject = new BehaviorSubject<number>(0);

  headerHeight$ = this.headerHeightSubject.asObservable();
  footerHeight$ = this.footerHeightSubject.asObservable();

  // Update the height of the header
  setHeaderHeight(height: number): void {
    this.headerHeightSubject.next(height);
  }

  // Update the height of the footer
  setFooterHeight(height: number): void {
    this.footerHeightSubject.next(height);
  }
}

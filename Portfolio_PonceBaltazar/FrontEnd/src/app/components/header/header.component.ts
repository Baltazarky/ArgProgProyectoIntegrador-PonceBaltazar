import { Component, OnInit, ElementRef } from '@angular/core';
import { HeaderFooterService } from 'src/app/service/header-footer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private el: ElementRef, private headerFooterService: HeaderFooterService) {}

  ngOnInit() {
    this.updateHeaderHeight();
  }

  updateHeaderHeight() {
    const headerElement = this.el.nativeElement;
    this.headerFooterService.setHeaderHeight(headerElement.offsetHeight);
  }
}

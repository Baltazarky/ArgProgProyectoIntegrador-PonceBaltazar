import { Component, OnInit, ElementRef } from '@angular/core';
import { HeaderFooterService } from 'src/app/service/header-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private el: ElementRef, private headerFooterService: HeaderFooterService) {}

  ngOnInit() {
    this.updateFooterHeight();
  }

  updateFooterHeight() {
    const footerElement = this.el.nativeElement;
    this.headerFooterService.setFooterHeight(footerElement.offsetHeight);
  }
}

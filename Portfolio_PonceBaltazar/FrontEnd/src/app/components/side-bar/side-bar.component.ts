import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderFooterService } from 'src/app/service/header-footer.service';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
  private headerHeightSub: Subscription;
  private footerHeightSub: Subscription;
  headerHeight = 0;
  footerHeight = 0;

  constructor(private headerFooterService: HeaderFooterService, private sharedService: SharedService) {}

  toggleAcercaDe() {
    this.sharedService.triggerToggle('acercade'); // Target the educacion component
  }
  
  toggleExperienciaLaboral() {
    this.sharedService.triggerToggle('experiencialaboral'); // Target the educacion component
  }
  toggleEducacion() {
    this.sharedService.triggerToggle('educacion'); // Target the educacion component
  }
  toggleSkills() {
    this.sharedService.triggerToggle('skills'); // Target the educacion component
  }

  toggleProyectos() {
    this.sharedService.triggerToggle('proyectos'); // Target the educacion component
  }

  ngOnInit() {
    // Subscribe to the header and footer height observables
    this.headerHeightSub = this.headerFooterService.headerHeight$.subscribe(height => {
      this.headerHeight = height;
      this.updateSidebarHeight();
    });

    this.footerHeightSub = this.headerFooterService.footerHeight$.subscribe(height => {
      this.footerHeight = height;
      this.updateSidebarHeight();
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.headerHeightSub.unsubscribe();
    this.footerHeightSub.unsubscribe();
  }

  updateSidebarHeight() {
    const sidebar = document.querySelector('.side-bar-container') as HTMLElement;
    if (sidebar) {
      const windowHeight = window.innerHeight;
      sidebar.style.height = `${windowHeight - this.headerHeight - this.footerHeight}px`;
    }
  }

  onButtonClick(buttonNumber: number): void {
    console.log(`Button ${buttonNumber} clicked!`);
  }

}


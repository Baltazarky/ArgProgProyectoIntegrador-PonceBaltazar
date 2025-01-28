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

  currentOpen: string | null = null; // Tracks the currently open component

  constructor(private headerFooterService: HeaderFooterService, private sharedService: SharedService) {}

  toggleAcercaDe() {
    this.toggle('acercade', () => this.sharedService.triggerToggle('acercade'));
  }

  toggleExperienciaLaboral() {
    this.toggle('experiencialaboral', () => this.sharedService.triggerToggle('experiencialaboral'));
  }

  toggleEducacion() {
    this.toggle('educacion', () => this.sharedService.triggerToggle('educacion'));
  }

  toggleSkills() {
    this.toggle('skills', () => this.sharedService.triggerToggle('skills'));
  }

  toggleProyectos() {
    this.toggle('proyectos', () => this.sharedService.triggerToggle('proyectos'));
  }

  private toggle(component: string, toggleCallback: () => void) {
    if (this.currentOpen === component) {
      // If the component is already open, close it
      toggleCallback();
      this.currentOpen = null;
    } else {
      // Close the currently open component, if any
      if (this.currentOpen) {
        this.sharedService.triggerToggle(this.currentOpen);
      }
      // Open the new component
      toggleCallback();
      this.currentOpen = component;
    }
  }

  ngOnInit() {
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
}

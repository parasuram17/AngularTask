import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-left-navbar',
  standalone: true,
  imports: [],
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.css'
})
export class LeftNavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) { }

  collapseButton: HTMLElement = this.document.querySelector('#collapsing-button') as HTMLElement;
  sideBar: HTMLElement = this.document.querySelector('.sidebar') as HTMLElement;
  body: HTMLElement = this.document.querySelector('app-root') as HTMLElement;

  ngOnInit(): void {
    this.isSidebarCollapsed();
    this.collapseSidebar();
  }

  collapseSidebar() {
    console.log(this.body)
    this.collapseButton.addEventListener('click', () => {
      this.sideBar.classList.toggle('active');
      this.body.classList.toggle('active');
      if (isPlatformBrowser(this.platformId)) {
        let sideBarCollapse = localStorage.getItem("sidebarCollapse")
        if (sideBarCollapse) {
          let sideBarCollapseValue = JSON.parse(sideBarCollapse);
          sideBarCollapseValue = !sideBarCollapseValue
          localStorage.setItem("sidebarCollapse", JSON.stringify(sideBarCollapseValue));
        }
        else {
          localStorage.setItem("sidebarCollapse", JSON.stringify(true));
        }
      }
    })
  }

  isSidebarCollapsed() {
    if (isPlatformBrowser(this.platformId)) {
      let storageCollapse = localStorage.getItem("sidebarCollapse");
      if (storageCollapse == "true") {
        this.sideBar.classList.add('active');
        this.body.classList.add('active');
      }
      else {
        this.sideBar.classList.remove('active');
        this.body.classList.remove('active');
      }
    }
  }
}


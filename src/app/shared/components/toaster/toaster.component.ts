import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent implements OnInit {
  toasterVisible = false;
  toasterType: string = '';
  toasterMessage: string = '';
  toasterHeading: string = '';

  ngOnInit() {
    const toast = localStorage.getItem("Toast");
    if (toast) {
      const toastArr = JSON.parse(toast);
      this.showToastNotification(toastArr[0], toastArr[1]);
      localStorage.removeItem("Toast");
    }
  }

  showToastNotification(toasterType: string, toasterMessage: string) {
    this.toasterType = toasterType.toLowerCase();
    this.toasterHeading = this.toasterType[0].toUpperCase() + this.toasterType.slice(1);
    this.toasterMessage = toasterMessage;
    this.toasterVisible = true;

    setTimeout(() => {
      this.hideToaster();
    }, 3000);
  }

  hideToaster() {
    this.toasterVisible = false;
  }
}

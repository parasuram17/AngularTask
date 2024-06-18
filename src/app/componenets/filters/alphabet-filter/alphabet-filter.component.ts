import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-alphabet-filter',
  standalone: true,
  imports: [],
  templateUrl: './alphabet-filter.component.html',
  styleUrl: './alphabet-filter.component.css'
})
export class AlphabetFilterComponent implements AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) { }
  
  filteredCharacters:string[] = []

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId))
    {
      this.alphabetButtonEventListener();
    }
  }

  alphabetButtonEventListener() {
    let alphabetButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn-alphabet') as NodeListOf<HTMLButtonElement>;
    if(alphabetButtons){
    alphabetButtons.forEach((alphabetButton) => {
        alphabetButton.addEventListener('click', () => {
            let letter = alphabetButton.innerHTML;
            if(letter)
            
            if (this.filteredCharacters.indexOf(letter) == -1) {
                this.filteredCharacters.push(letter);
            }
            else if (this.filteredCharacters.indexOf(letter) != -1) {
                this.filteredCharacters.splice(this.filteredCharacters.indexOf(letter), 1);
            }
            alphabetButton.classList.toggle('active');

            // highlightFilterIcon();
            // filterEmployeeTable();
        })
    })
  }
  

}
  

}

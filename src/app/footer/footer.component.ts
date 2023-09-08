import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isPlaying: boolean = false;
  currentRadio: string = '';

  constructor() { }

  ngOnInit(): void {
    //to-do
  }

  togglePlayPause() {
    //to-do
    this.isPlaying = !this.isPlaying;
  }

 
}
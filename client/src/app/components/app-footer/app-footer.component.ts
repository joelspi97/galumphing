import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.sass']
})
export class AppFooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}

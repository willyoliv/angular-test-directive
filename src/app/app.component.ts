import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-diretivas';
  constructor() { }

  ngOnInit() { }

  click($event: Event) {
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
  }
}

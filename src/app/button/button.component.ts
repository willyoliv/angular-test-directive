import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  print($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    console.log("Print");
  }
}

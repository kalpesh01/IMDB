import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  list = [1, 2, 3, 4, 5, 5];

  constructor() {}

  ngOnInit(): void {}
}

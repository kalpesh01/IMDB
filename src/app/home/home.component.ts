import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public faAirFreshener = faAirFreshener;
  constructor(private router: Router) { }
  public sessId = sessionStorage.getItem('sid');

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  processLogout() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }
}

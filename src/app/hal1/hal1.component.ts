import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component {
  data = datas;
  constructor(private router: Router) { }

  navigate(nama) {
    this.router.navigate([nama])
  }
}
const datas = [
  { nama: 'ABC' },
  { nama: 'DEF' },
  { nama: 'GHI' },
  { nama: 'JKL' }
]
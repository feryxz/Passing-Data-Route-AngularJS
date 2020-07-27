import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {
  nama;
  constructor(private active: ActivatedRoute) {
    active.params.subscribe(result => {
      this.nama = result['nama']
    })
  }

  ngOnInit(): void {
  }

}

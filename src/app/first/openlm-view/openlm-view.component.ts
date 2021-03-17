import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-openlm-view',
  templateUrl: './openlm-view.component.html',
  styleUrls: ['./openlm-view.component.scss'],
})
export class OpenlmViewComponent implements OnInit {
  title: any;
  author: any;
  price:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title');
    });
    this.route.paramMap.subscribe((params) => {
      this.author = params.get('author');
    });
    this.route.paramMap.subscribe((params) => {
      this.price = params.get('price');
    });
  }
}

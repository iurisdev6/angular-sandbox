import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kitano-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private version;

  constructor() { }

  ngOnInit() {
  }

}

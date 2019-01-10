import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'kitano-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private version;
  private date;

  constructor() { }

  ngOnInit() {
    this.version = environment.appVersion;
    this.date = environment.buildDate;
  }

}

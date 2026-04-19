import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  public name: string = '';
  public surname: string = '';
  public phone: string = '';
  public email: string = '';
  public company: string = '';

  public name2: string = '';
  public surname2: string = '';
  public phone2: string = '';
  public email2: string = '';
  public company2: string = '';

  constructor() {}

  ngOnInit(): void {
    this.name = 'John';
    this.surname = 'Doe';
    this.phone = '123-456-7890';
    this.email = 'john.doe@example.com';
    this.company = 'Example Inc.';

    this.name2 = 'Jane';
    this.surname2 = 'Smith';
    this.phone2 = '098-765-4321';
    this.email2 = 'jane.smith@example.com';
    this.company2 = 'Another Inc.';
  }
}

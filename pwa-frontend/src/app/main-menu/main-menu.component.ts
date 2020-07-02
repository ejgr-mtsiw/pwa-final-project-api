import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  userinfo = {
    name: 'Eduardo Ribeiro',
    isauthenticated: true,
    isadmin: true,
  };

  constructor() {}

  ngOnInit(): void {}
}

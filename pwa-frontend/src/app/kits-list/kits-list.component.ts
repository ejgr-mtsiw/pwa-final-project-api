import { Component, OnInit } from '@angular/core';

import { Kit } from '../models/kit';
import { KitService } from '../services/kit.service';

@Component({
  selector: 'app-kits-list',
  templateUrl: './kits-list.component.html',
  styleUrls: ['./kits-list.component.scss'],
})
export class KitsListComponent implements OnInit {
  kits: Kit[] = [];

  constructor(private kitService: KitService) {}

  ngOnInit(): void {
    this.getKits();
  }

  getKits(): void {
    this.kitService.getKits().subscribe((kits) => (this.kits = kits));
  }

  share() {
    window.alert('The product has been shared!');
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Kit } from '../models/kit';

@Injectable({
  providedIn: 'root',
})
export class KitService {
  private kitsUrl = 'kits'; // URL to web api

  constructor(private http: HttpClient) {}

  getKits(): Observable<Kit[]> {
    return this.http.get<Kit[]>(this.kitsUrl);
  }
}

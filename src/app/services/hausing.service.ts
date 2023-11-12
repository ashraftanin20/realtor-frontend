import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HausingService {

  url = 'http://localhost:3000/property-list';
  constructor(private http: HttpClient) { }

  async getAllProperties(): Promise<IProperty[]> {
      const data = await fetch(this.url);
      return await data.json();
  }

}

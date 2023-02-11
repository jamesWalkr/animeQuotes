import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, skipWhile, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getCharacter(){
    return this.http.get("https://api.jikan.moe/v4/characters")
    .pipe(
      map((response:any) => response.map((product:any) => product['name']))
    )

  }
}

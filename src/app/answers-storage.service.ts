import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswersStorageService {

  constructor(private http: HttpClient) { }

  verify(c){
    return this.http.post('http://localhost:3000/answers', c);
  }
}

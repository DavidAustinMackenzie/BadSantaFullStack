import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawService 
{
  readonly APIUrl = "http://127.0.0.1:9000"
  readonly Route = '/draw/'

  constructor(private http:HttpClient) { }

  addDraw(val:any)
  {
    return this.http.post(this.APIUrl + this.Route,val);
  }

  updateDraw(val:any)
  {
    return this.http.put(this.APIUrl + this.Route,val);
  }

  deleteDraw(val:any)
  {
    return this.http.delete(this.APIUrl + this.Route + val);
  }

  getDrawList():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIUrl + this.Route);
  }
}

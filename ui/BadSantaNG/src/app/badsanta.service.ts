import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadsantaService 
{
  readonly APIUrl = "http://127.0.0.1:8000"
  readonly Route = '/badsanta/'

  constructor(private http:HttpClient) { }

  addBadSanta(val:any)
  {
    return this.http.post(this.APIUrl + this.Route,val);
  }
  
  updateBadSanta(val:any)
  {
    return this.http.put(this.APIUrl + this.Route,val);
  }

  deleteBadSanta(val:any)
  {
    return this.http.delete(this.APIUrl + this.Route + val);
  }

  getBadSantaList():Observable<any[]>
  {
    return this.http.get<any[]>(this.APIUrl + this.Route);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ngxCsv} from 'ngx-csv/ngx-csv'

@Injectable({
  providedIn: 'root'
})
export class BadsantaService 
{
  readonly APIUrl = "http://127.0.0.1:9000"
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

  downloadFile(data: any) 
  {
    console.log(data);
    let options = {
      title:'Bad Santa Draw List',
      headers:['BadSantaId','BadSantaName','BadSantaPlace','Draw']
    };

    new ngxCsv(data,"Bad_Santa_List",options)
  }
}

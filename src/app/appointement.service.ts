import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointement} from './appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  constructor(private _http : HttpClient) { }

  public saveAppFromRemote(app: Appointement):Observable<any>{
    return this._http.post<any>("http://localhost:8081/takeapp",app)
  }

//   public registerUserFromRemote(user : User):Observable<any>{
//     return this._http.post<any>("http://localhost:8081/registeruser",user);
//   }

  handleError(error: Response){

  }
}

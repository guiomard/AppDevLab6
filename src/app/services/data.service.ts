import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http: HttpClient){}
  
  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/9ba03cc1-5e22-11ea-a136-7f624db812ed');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=ba5c6aa709bd7f88b050b9a75f80ce61');
  }

}

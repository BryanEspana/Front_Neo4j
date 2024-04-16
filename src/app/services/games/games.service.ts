import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GET_ALL_GAMES } from 'src/app/config/backeEndRoutes';
import { API_URL } from 'src/app/config/config';
import { Games } from 'src/app/pages/explorar/explorar.component';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

constructor(
  private http: HttpClient
) { }


getAllGames(page:number, pageSize: number = 20): Observable<Games[]>{
  const baseURL = `${API_URL}${GET_ALL_GAMES}`
  let params = new HttpParams()
  .set('page', page.toString())
  .set('pageSize', pageSize.toString());

return this.http.get<Games[]>(baseURL, { params });
  
}


}
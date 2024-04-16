import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GET_ALL_GAMES } from 'src/app/config/backeEndRoutes';
import { API_URL } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

constructor(
  private http: HttpClient
) { }


getAllGamesByPage(page: number, pageSize: number): Observable<any> {
  const url = `${API_URL}${GET_ALL_GAMES}`;
  let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('pageSize', pageSize.toString());

    return this.http.get<any>(url, { params }).pipe(
      map(response => response),
      catchError(err => {
        console.error("ERROR al obtener los juegos:", err);
        return throwError(() => err);
      })
    );
  }

}

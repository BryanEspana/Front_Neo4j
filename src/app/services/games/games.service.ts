import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GET_ALL_GAMES, GET_GAMES_BY_STORE } from 'src/app/config/backeEndRoutes';
import { API_URL } from 'src/app/config/config';
import { Games } from 'src/app/interfaces/Games';

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

getGamesByStoreId(storeId: number, page: number = 1, pageSize: number = 10): Observable<any[]> {
  const baseURL = `${API_URL}${GET_GAMES_BY_STORE}`
  let params = new HttpParams()
    .set('storeID', storeId.toString())
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());

  return this.http.get<{Game: any, inStock: number}[]>(baseURL, { params }).pipe(
    map(response => response.map(item => ({
      ...item.Game,
      inStock: item.inStock
    })))
  );
}


addGamesByStoreId(storeId: number, games: any[]): Observable<any> {
  const baseURL = `${API_URL}${GET_GAMES_BY_STORE}`
  const params = new HttpParams()
    .set('storeID', storeId.toString());

  // Enviar payload como segundo argumento en la solicitud POST
  return this.http.post(baseURL, games, { params });
}

}
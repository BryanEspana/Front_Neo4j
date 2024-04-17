import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CREATE_GAME, CREATE_STORE, DELETE_GAME_BY_ID, GET_ALL_GAMES, GET_GAMES_BY_STORE, GET_GAME_BY_ID, GET_STORES_BY_GAME } from 'src/app/config/backeEndRoutes';
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


createNewStore(storeData: { nombre: string, direccion: string, hasOnline: boolean }): Observable<any> {
  const baseURL = `${API_URL}${CREATE_STORE}`
  return this.http.post(baseURL, storeData);
}

createNewGame(GameData:{titulo:string, publicacion: string, descripcion: string; portada: string; rating:number; precio:number; screenshots:string;}): Observable<any> {
  const baseURL = `${API_URL}${CREATE_GAME}`
  return this.http.post(baseURL, GameData);
}
getGameById(id: string): Observable<any> {
  return this.http.get(`${API_URL}${GET_GAME_BY_ID}${id}`);
}
getStoresByGameId(gameId: string, page: number = 1, pageSize: number = 20): Observable<any> {
  const params = new HttpParams()
    .set('page', page.toString())
    .set('pageSize', pageSize.toString());

  return this.http.get(`${API_URL}${GET_STORES_BY_GAME}${gameId}`, { params });
}

deleteGame(storeId: number, gameId: number): Observable<any> {
  const baseURL = `${API_URL}${DELETE_GAME_BY_ID}`
  const params = new HttpParams()
    .set('storeID', storeId.toString());
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: [{ gameID: gameId }],
    params: params
  };

  return this.http.delete(baseURL, options);
}

CartShop(): Observable<any> {
  throw new Error('Method not implemented.');
}
}
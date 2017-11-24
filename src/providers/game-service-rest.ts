import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let gamesURL = SERVER_URL + 'api/games/';

@Injectable()
export class GameService {
  favoriteCounter: number = 0;
  favorites: Array<any> = [];

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(gamesURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(gamesURL + "id/" + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    favorite(game) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({id: this.favoriteCounter, game: game});
        return Promise.resolve();
    }

    unfavorite(favorite) {
        let index = this.favorites.indexOf(favorite);
        if (index > -1) {
          this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}

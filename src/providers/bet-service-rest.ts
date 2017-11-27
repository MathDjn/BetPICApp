import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let betsURL = SERVER_URL + 'api/bets/';

@Injectable()
export class BetService {
  favoriteCounter: number = 0;
  favorites: Array<any> = [];

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(betsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(betsURL + "id/" + id)
            .map(res => res.json())
            .toPromise();
    }

    create(bet) {
        return this.http.post(betsURL + "create", bet);
    }
}

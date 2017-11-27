import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {GameService} from '../../providers/game-service-rest';
import {GameDetailPage} from '../game-detail/game-detail';
import leaflet from 'leaflet';

@Component({
    selector: 'page-game-list',
    templateUrl: 'game-list.html'
})
export class GameListPage {

    games: Array<any>;
    gamesForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: GameService, public config: Config) {
        this.findAll();
    }

    openGameDetail(game: any) {
        this.navCtrl.push(GameDetailPage, game.id);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.games = this.gamesForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.games = this.games.filter((game) => {
            return (game.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.games = data;
                this.gamesForSearch = data;
            })
            .catch(error => alert(error));
    }

    gameMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.gameMarkers();
        })
    }

    gameMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.games.forEach(game => {
            if (game.lat, game.lng) {
                let marker: any = leaflet.marker([game.lat, game.lng]).on('click', event => this.openGameDetail(event.target.data));
                marker.data = game;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}

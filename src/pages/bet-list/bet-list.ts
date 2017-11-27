import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {BetService} from '../../providers/bet-service-rest';
import {GameDetailPage} from '../game-detail/game-detail';
import leaflet from 'leaflet';

@Component({
    selector: 'page-bet-list',
    templateUrl: 'bet-list.html'
})
export class BetListPage {

    bets: Array<any>;
    betsForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: BetService, public config: Config) {
        this.findAll();
    }

    openGameDetail(bet: any) {
        this.navCtrl.push(GameDetailPage, bet);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.bets = this.betsForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.bets = this.bets.filter((bet) => {
            return (bet.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.bets = data;
                this.betsForSearch = data;
            })
            .catch(error => alert(error));
    }

    betMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.betMarkers();
        })
    }

    betMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.bets.forEach(bet => {
            if (bet.lat, bet.lng) {
                let marker: any = leaflet.marker([bet.lat, bet.lng]).on('click', event => this.openGameDetail(event.target.data));
                marker.data = bet;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}

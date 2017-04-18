import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PhotoService} from './photo.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: 
    `
        <div>
            <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i> 
            </div>
            <div *ngFor="let album of albums">
                <ul>                    
                    <li>
                        <a [routerLink]="['/albums', album.id]">
                            {‌{ album.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers:  [PhotoService, HTTP_PROVIDERS]
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums;

    constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}
import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photo.service';
import {RouteSegment} from '@angular/router';
@Component({
    template: `
    <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngFor="let photo of photos">        
        <li><img src="{‌{ photo.thumbnailUrl }}"></li>
    </div>    
    `,
    providers: [PhotoService]    
})
export class AlbumComponent implements OnInit{
    isLoading = true;
    photos;
    id: string;   
    constructor(private _photoService: PhotoService,
               private _routeSegment: RouteSegment ) {                       
        
    }    
    ngOnInit () {
        this._photoService.getPhotos(this._routeSegment.getParam('id'))
            .subscribe(result => { this.photos = result; 
                                    //console.log(result); 
                                }
                        ,error => console.log(error)
                        ,() => this.isLoading = false
                        );
    }   
}
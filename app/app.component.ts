import {Component} from 'angular2/core';
import { Routes, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import{AlbumsComponent} from './albums.component';
import{AlbumComponent} from './album.component';
import{ContactComponent} from './contact.component';

@Routes([
        {path: '/albums/:id', component: AlbumComponent},
        {path: '/albums',  component: AlbumsComponent},
        {path: '/contact', component: ContactComponent},
        {path: '*', component: AlbumsComponent}   
        
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
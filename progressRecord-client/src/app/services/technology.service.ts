import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { GLOBAL } from './global';
import { Observable } from 'rxjs';



@Injectable()
export class TechnologyService {
    public url:string;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    addTechnology(technology):Observable<any> {
        let params = JSON.stringify(technology);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+"technology", params, {headers:headers});
    }

    removeTechnology(technologyId):Observable<any>{
        
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+"technology/"+technologyId, {headers:headers});
    }
    
    getTechnologies():Observable<any>{        
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+"technologies/", {headers:headers});
    }
    
}


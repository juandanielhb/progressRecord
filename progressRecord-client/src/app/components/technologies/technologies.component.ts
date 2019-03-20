import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { Technology } from 'src/app/models/technology';

@Component({
    selector: 'technologies',
    templateUrl: './technologies.component.html',
    providers: [TechnologyService]   
    
})
export class TechnologiesComponent implements OnInit {
    public url:string;
    public status: string;
    public technologies: Array<any>;
    public categories = [];
    public otherOption = true;
    public technology = new Technology('','','');
    public selected = this.categories[0];
    
    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
        private _technologyService:TechnologyService
    ) { 
        this.url = GLOBAL.url;
        this.selected = this.categories[0];
    }

    ngOnInit(): void {
        
        this.getTechnologies();        
        
    }

    ngDoCheck(): void {
    }

    getTechnologies(){
        this._technologyService.getTechnologies().subscribe(
            response => {
                
                if(!response.technologies){
                    this.status = 'error';
                }else{
                    this.technologies = response.technologies;
                    localStorage.setItem('technologies', JSON.stringify(this.technologies));

                    this.getCategories(this.technologies);

                    
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);

                if(errorMessage != null){
                    this.status = 'error';
                }

        });

    }    

    getCategories(technologies){ 
        this.categories = Array.from(new Set(technologies.map( (x: { category: any; }) => x.category)));
        this.selected = this.categories[0];
        console.log(this.categories.length);
        
        
    }    

    onSave(form){
        this._technologyService.addTechnology(this.technology).subscribe(
            response => {
                if(response.technology._id){
                    //console.log(response.user);
                    this.status = 'success';     
                    this.getTechnologies();                
                    form.reset();
                }else{
                    this.status = 'error';
                }
            },
            error => {

                this.status = 'error';
            }
        );
        
    }

    deleteTechnology(id){
        console.log(id);
        this._technologyService.removeTechnology(id).subscribe(
            response => {
                if(response.technology._id){
                    
                    this.status = 'success';     
                    this.getTechnologies();                 
                    
                }else{
                    this.status = 'error';
                }
            },
            error => {

                this.status = 'error';
            }
        );
        
     }


}

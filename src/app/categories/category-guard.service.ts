import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryDetailGuard implements CanActivate{

    constructor(private __route: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean{
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert('Invalid Category Id');
            this.__route.navigate(['/categories']);
            return false;
        }
        return true;
    }

}
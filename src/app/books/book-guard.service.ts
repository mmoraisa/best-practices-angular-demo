import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class BookDetailGuard implements CanActivate {

    constructor(private __route: Router){}
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert('Invalid Book Id');
            this.__route.navigate(['/books']);
            return false;
        }
        return true;
    }

}
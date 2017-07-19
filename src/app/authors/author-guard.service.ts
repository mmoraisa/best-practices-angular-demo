import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthorDetailGuard implements CanActivate {

    constructor(private __route: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert('Invalid Author Id');
            this.__route.navigate(['/authors']);
            return false;
        }
        return true;
    }

}
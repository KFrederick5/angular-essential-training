import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }
    @HostListener('click') onMouseClick(){
        if(this.isFavorite == true){
            this.isFavorite = false;
        }
        else{
            this.isFavorite = true;
        }
    }
    @Input() set mwFavorite(value){
        this.isFavorite = value; 
    }
}
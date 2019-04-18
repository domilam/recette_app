import { Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective{
    //First way to toggle the dropdown menu (add: [classN] = "'open'" in HTML Tag with the 
    //directive selector: appDropdown)
    /* @Input() classN: string = 'open';
    @HostListener('click') onclick(){
        console.log(this.eltRef);
        var classList = this.eltRef.nativeElement.classList;
        classList.indexOf = Array.prototype.indexOf;
        console.log(classList);
        if(classList.indexOf(this.classN) === -1){
            this.eltRef.nativeElement.classList.add(this.classN);
        }else{
            this.eltRef.nativeElement.classList.remove(this.classN);
        }
    }
    constructor(private eltRef: ElementRef){
    } */
    
    @HostBinding('class.open') isOpen: boolean = false;
    @HostListener('click') onclick(){
        this.isOpen = !this.isOpen;
    }
    constructor(private eltRef: ElementRef){
    }

}
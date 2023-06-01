

import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[initDiv]'
})
export class InitDivDirective implements AfterViewInit {
  @Input() rowIndex: number;
  @Input() colIndex: number;
  @Input() font: any;
  @Input() fontSize: any;
  @Input() fontColor: any;
  @Input() backgroundColor: any;
  @Input() customProp: Array<any> = [];
  
  constructor(private elementRef: ElementRef,  private renderer: Renderer2,    private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Obtiene el elemento <div> actual
    // console.log("row: ", this.rowIndex + " col " + this.colIndex)
    const element = this.elementRef.nativeElement;

    // Encuentra el elemento padre con la etiqueta "datatable-body-cell"
    const bodyCell = this.findParentByTagName(element, 'datatable-body-cell');

    // Si se encuentra el elemento padre, le asigna la clase deseada
    const customStyle = this.customProp.find(x=> x.col == this.colIndex && x.row == this.rowIndex);

    if (bodyCell) {
      this.renderer.setStyle(bodyCell, 'background-color', customStyle ? customStyle['backgroundColor'] : this.backgroundColor);
      this.renderer.setStyle(bodyCell, 'color', this.fontColor);
     
    }
    // this.cdr.detectChanges();
    console.log(this.elementRef.nativeElement.parentNode.parentNode.classList)
  }

  findParentByTagName(element: HTMLElement, tagName: string): HTMLElement {
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === tagName) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
}


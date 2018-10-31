import { Component, Output, Input, EventEmitter, HostBinding, ElementRef, OnInit } from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
  :host {
    display: flex;
    padding: 50px;
    border: 1px solid black;
    border-radius: 20px;
    margin : 7px;
  }
  `]
})

export class CardComponent implements OnInit {
  [x: string]: any;
  update: any;
  number: any;
  todo: any;

  ngOnInit(): void {
    //  console.log(this.el.nativeElement);
    //console.log(this.order);
    this.el.nativeElement.style.order = this.order;
  }

  @Input() order: number;
  @Input() _id: string;
  @Input() commentaires: string;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private api: ApiService) { }
  droppedData: string;

  // dragEnd(event) {
  //   console.log('Element was dragged', event);
  // }

  /*delete item*/
  onDelete(){
    this.api.deleteAgenda(this._id)
    .subscribe(res => {
      this.delete.emit();
    }, err => {
      console.error("erreur");
    });
  }
  
  focusOut() {
    var data = {
      _id: this._id,
      commentaires: this.commentaires
    };
    this.api.updateAgenda(this._id, data)
    .subscribe(res => {
      // console.log(data);
      console.log("Succès");
    }, err => {
      console.error("erreur");
    });
  }
}

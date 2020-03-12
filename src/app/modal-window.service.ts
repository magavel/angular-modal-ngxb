import { Injectable, EventEmitter } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { callbackify } from 'util';



@Injectable({
  providedIn: 'root'
})
export class ModalWindowService  {

  bsModalRef: BsModalRef;
  response = new EventEmitter();


  constructor(private modalService: BsModalService) {}

  showModal( modalComponent, {initialState}, callback) {
    this.bsModalRef = this.modalService.show( modalComponent, {initialState});
    this.reponse(callback);
  }

  reponse(callback){
    this.response.subscribe((response: boolean) => {
      callback();
      }
    );
  }

}

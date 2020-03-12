import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ModalWindowService } from '../modal-window.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public bsModalRef: BsModalRef, private modalService: ModalWindowService) { }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  set bouton(value: string) {
    this._bouton = value;
  }
  get bouton(): string {
    return this._bouton;
  }


  @Input() private _title: string;
  @Input() private _message: string;
  @Input() private _bouton: string;


  test() {
    this.bsModalRef.hide();
    this.modalService.response.emit(false);

  }

}

import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalWindowService } from '../modal-window.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})


export class ParentComponent implements OnInit {

  test = false;
  constructor(private modalService: ModalWindowService) { }

  openModal() {
    const initialState = {
      message: 'Voulez vous supprimer cette image',
      title: 'Attention: zone de danger...',
      bouton: 'OK'
    };
    this.modalService.showModal(ModalComponent, { initialState }, () => {
      console.log('dans la callBack du parent');
      this.test = true;
      console.log('ds cb', this.test);
    });

    console.log('ds openshow', this.test);
  }
  ngOnInit() {
    console.log('ds oninit', this.test);
  }

}

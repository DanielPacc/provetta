import { Component, OnInit } from '@angular/core';
import { connect } from 'src/connect.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, FormsModule {
  autovettura: any[] | undefined;
  id: number | undefined;
  targa: string | undefined;
  marca: string | undefined;
  modello: string | undefined;
  costo: number | undefined;
  info: string | undefined;
  img: string | undefined;
  title = 'provetta';

  constructor(private connect: connect) { }

  ngOnInit() {
    this.id=-1;
    this.targa='';
    this.marca='';
    this.modello='';
    this.costo=-1;
    this.info='';
    this.img='';
  }

  getCars() {
    this.connect.getTableData().subscribe(data => {
      this.autovettura = data;
    });
  }

  getCarsfl(filt: string) {
    this.connect.getTableDatafl(filt).subscribe(data => {
      this.autovettura = data;
    });
  }

  addCar() {
    const newcar = {id: this.id, targa: this.targa, marca: this.marca, modello: this.modello, costo: this.costo, info: this.info, img: this.img};
    this.connect.insertData(newcar).subscribe(response => {
      console.log(response);
      this.getCars();
    });
  }

  deleteCar(Id: number) {
    this.connect.deleteData(Id).subscribe(response => {
      console.log('User deleted successfully.');
      this.getCars();
    });
  }
}


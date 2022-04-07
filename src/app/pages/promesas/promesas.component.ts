import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then((usuarios) => {
      console.log(usuarios);
    });
    // const promesa = new Promise((resolve, reject) => {
    //   if (1 !== 1) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa.then((data) => {
    //   console.log('Hey termine ', data);
    // }).catch((error) => {
    //   console.log('Hey algo ta mal: ', error);
    // });
    // console.log('Fin del init');
    this.getUsuario();
  }

  getUsuario(): Promise<any> {
    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });
    return promesa;
  }

}

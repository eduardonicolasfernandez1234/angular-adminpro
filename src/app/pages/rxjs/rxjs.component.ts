import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs!: Subscription;

  constructor() {}

  ngOnDestroy(): void {
    // this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
    // this.retornaObservable().pipe(retry(2)).subscribe(
    //   (valor) => console.log('Subs: ', valor),
    //   (error) => console.log('Error: ', error),
    //   () => console.log('Obs terminada')
    // );

    // this.intervalSubs = this.retornaIntervalo().subscribe(
    //   (valor) => console.log(valor)
    // );
  }



  retornaIntervalo() {
    const interval$ = interval(100)
      .pipe(
        take(10),
        map(valor => valor + 1),
        filter(valor => (valor % 2 == 0)),
        );
    return interval$;
  }

  retornaObservable(): Observable<number> {
    let i = 0;
    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('Algo salio mal, i llego al valor de 2');
        }
      }, 1000);
    });
    return obs$;
  }
}

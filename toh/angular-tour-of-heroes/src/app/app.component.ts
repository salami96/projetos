import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  inicio: number;
  mensagens: string[];
  observable: Observable<string>;
  sub: Subscription;
  constructor(private http: HttpClient) {
    this.inicio = Date.now();
    this.mensagens = ['Mensagem inicial'];
    this.observable = new Observable( observer => {
      observer.next('alo1');
      setTimeout(() => observer.next('alo2'), 2000);
      observer.next('alo3');
      setTimeout(() => observer.complete(), 4000);
    });
  }
  getAllPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(
      dados => {},
      erro => {}
    );
  }
  ngOnInit(): void {
    this.sub = this.observable.subscribe(
      m => {
        const dif = Date.now() - this.inicio;
        this.mensagens.push(`${dif}: ${m}`);
      },
      e => console.log(e),
      () => this.mensagens.push(`Terminated`));

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

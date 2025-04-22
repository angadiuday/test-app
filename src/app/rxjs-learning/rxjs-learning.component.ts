import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, forkJoin, from, fromEvent, mergeMap, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [],
  template: `<button #validate (click)="eventObservable()"> click here </button>`,
  styleUrl: './rxjs-learning.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsLearningComponent implements OnInit {

  agents!: Observable<string>;

  studentObj ={
    name:'Uday'
  }

  
  orderArr = ['Fashion', 'Laptops', 'Chairs']
  students$: Observable<any> = of(this.orderArr);
  orders$: Observable<string> = from(this.orderArr);

  @ViewChild('validate')
  validate!: ElementRef;
  user = [1,2,3];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    

   
    // this.agents = new Observable(
    //   function(observer) {
    //     try {
    //       observer.next('Uday');
    //       observer.next('Angadi')
          
    //     } catch (error) {
    //       observer.error(error);
    //     }
    //   }
    // );

    // this.agents.subscribe(data => {
    //   console.log(data);
    // })


    // this.students$.subscribe(data => {
    //   console.log(data);
    // })

    // this.orders$.subscribe(data => {
    //   console.log(data);
    // })

  }

  eventObservable() {
    // const btn$ = fromEvent(this.validate.nativeElement, 'click');

    // btn$.subscribe(data => {
    //   console.log(data);
    // })


    // from(this.user).pipe(

    //   switchMap(id=> this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
    // ).pipe(delay(2000)).subscribe(posts => {
    //   console.log(posts);
    // })

    forkJoin({
      user: this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      posts: this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1'),
      comments: this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
    }).subscribe(data => console.log(data));
  }

  
 }

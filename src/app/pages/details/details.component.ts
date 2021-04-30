import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { userActions } from 'src/app/store/modules/user/user.action';
import { getUser } from 'src/app/store/modules/user/user.selectors';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  users$: Observable<User> = this.store.pipe(select(getUser));
  constructor( protected store: Store) { }

  ngOnInit() {

    this.store.dispatch(userActions.loadA());
  }

}

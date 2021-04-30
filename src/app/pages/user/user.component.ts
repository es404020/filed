import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BaseResourceGridComponent } from 'src/app/utils/base-resource-grid.component';
import { environment } from 'src/environments/environment';
import { userActions } from '../../store/modules/user/user.action';
import {
  getUser,
  getUserEditing
} from '../../store/modules/user/user.selectors';

const createFormGroup = (dataItem?: User) => {

  return new FormGroup({
 
    firstName: new FormControl(null, [
      Validators.required,
     
    ]),
    lastName: new FormControl(null, [
      Validators.required,
     
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
     
    ]),
    mob: new FormControl(null, [
      Validators.required,
     
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
    
    ])
  });
};


@Component({
  selector: 'user-grid',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserGrid extends BaseResourceGridComponent<User>
  implements OnInit {
    country_code=environment.country_code;
  count$: Observable<number>;
  users$: Observable<User> = this.store.pipe(select(getUser));
  public clearFormSubscription = new Subscription();
  
  constructor(
    protected injector: Injector,
    protected userService: UserService,
    protected store: Store,
    protected router:Router,
  
    protected snotifyService: NotifierService
  ) {
    super(
      injector,
      new User(),
      userService,
      createFormGroup,
      userActions,
      store,
      router,
      snotifyService
     
    );
  }


}

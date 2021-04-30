import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { userActions } from './user.action';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadA),
      mergeMap(() =>
        this.userService.getAll().pipe(
          map((users: any) => userActions.loadedA({ users: users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  public saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.createA),
      switchMap((action) =>
        this.userService.save(action.data).pipe(
          map(() => {
            this.userService.setClearForm();
            return userActions.loadA();
          })
        )
      )
    )
  );

  public updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.updateA),
      switchMap((action) =>
        this.userService.update(action.data).pipe(
          map(
            () => {
              this.userService.setClearForm();
              return userActions.loadA();
            },
            catchError((error) => of(userActions.loadA()))
          )
        )
      )
    )
  );

  public deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.deleteA),
      switchMap((action) =>
        this.userService.delete(action.id).pipe(
          map(() => userActions.loadA()),
          catchError((error) => of(userActions.loadA()))
        )
      )
    )
  );
}

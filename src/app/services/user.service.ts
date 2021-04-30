import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { BASE_URL } from './api.baseUrl';
import { BaseRecursoService } from './base-recurso-service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseRecursoService<User> {
  constructor(protected injector: Injector) {
    super(`${BASE_URL}/user`, injector, User.fromJson);
  }
}

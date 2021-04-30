import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from 'src/app/store/modules/user/user.effects';
import {
  userFeatureKey,
  userReducer
} from '../../store/modules/user/user.reducer';

import { UserRoutingModule } from './user.routing.module';
import { FooterComponent } from '../../component/footer/footer.component';
import { QuotesComponent } from '../../component/quotes/quotes.component';
import { NotifierModule, NotifierService } from 'angular-notifier';
import { UserGrid } from 'src/app/pages/user/user.component';
import { DetailsComponent } from '../../pages/details/details.component';


@NgModule({
  declarations: [UserGrid, FooterComponent, QuotesComponent, DetailsComponent],
  imports: [
    CommonModule,
    NotifierModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  entryComponents: [],
  providers: [NotifierService]
})
export class UserModule {}

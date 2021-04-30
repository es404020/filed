import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotifierService } from 'angular-notifier';

import { Subscription } from 'rxjs';
import { BaseResourceModel } from '../models/base-resource.model';
import { BaseRecursoService } from '../services/base-recurso-service';

export abstract class BaseResourceGridComponent<T extends BaseResourceModel> {
  public view;
  public formGroup: FormGroup;
  public resources: T[] = [];
  public editing: boolean = false;
  protected formBuilder: FormBuilder;
  public clearFormSubscription = new Subscription();
  public submitted: boolean;
  code: any;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseRecursoService<T>,
    protected createFormGroupFn: (dataItem?: any) => FormGroup,
    protected actions: { [key: string]: any },
    protected store: Store,
    protected router:Router,
    protected snotifyService: NotifierService


  ) {
    this.formGroup = createFormGroupFn();
  }

  public ngOnInit() {
    this.store.dispatch(this.actions.loadA());
    this.clearFormSubscription = this.resourceService.clearForm$.subscribe(
      () => {
        this.formGroup.reset();
      }
    );
  }

  public save() {
  
    this.submitted = true;
  

    if (this.formGroup.invalid) {
      this.scrollToError();
      this.snotifyService.notify('error', 'Whoops ,something went wrong!');
    } else {

      if(this.code != null){

        this.formGroup.patchValue({
          PhoneNumber:this.code+this.formGroup.value['PhoneNumber']
        })

        this.submitted = false;
  
        this.resource = this.formGroup.value;
        this.snotifyService.notify('success', ' Information stored ');
        this.store.dispatch(this.actions.createA({ data: this.resource }));

        setTimeout(()=>{
          this.router.navigateByUrl('user');
        },1000)
       
       

      }else{
        this.snotifyService.notify('error', 'Whoops ,country name missing!');

      }
     
    }
   
  }

 

  scrollTo(el: any): void {
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  
  scrollToError(): void {
    const firstElementWithError = document.querySelector(
      ".ng-invalid[formControlName]"
    );
  
  
    this.scrollTo(firstElementWithError);
  }

  public  get L() {
    return this.formGroup.controls;
  }
  onselectCode(value){

    this.code=value;
  
    }
  
}

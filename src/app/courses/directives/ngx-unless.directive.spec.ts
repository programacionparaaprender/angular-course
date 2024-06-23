import { NgxUnlessDirective } from './ngx-unless.directive';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient, HttpClient } from "@angular/common/http";
import {TemplateRef, ViewContainerRef} from '@angular/core';

describe('NgxUnlessDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports:[],
      providers: [provideHttpClient(), TemplateRef, ViewContainerRef],
      schemas: [],
    }).compileComponents();
  });
/*   it('Comparar listas de usuarios', inject([CoursesService], (coursesService: CoursesService) => {
    
    tioService.lista().subscribe(data=>{
        expect(data).toEqual(tiosBDServicio);
    },(error)=>{
      console.log(error)
    });
  })); */
  it('should create an instance', () => {
    //const directive = new NgxUnlessDirective();
    const directive = TestBed.createComponent(NgxUnlessDirective);
    expect(directive).toBeTruthy();
  });
});


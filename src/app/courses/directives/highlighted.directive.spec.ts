import { HighlightedDirective } from './highlighted.directive';
import {CoursesService} from '../courses.service';


import { TestBed } from '@angular/core/testing';
import { NgxUnlessDirective } from './ngx-unless.directive';
import { provideHttpClient, HttpClient } from "@angular/common/http";


describe('HighlightedDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports:[],
      providers: [provideHttpClient(), CoursesService],
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
    //const directive = new HighlightedDirective();
    const directive = TestBed.createComponent(HighlightedDirective);
    expect(directive).toBeTruthy();
  });
});


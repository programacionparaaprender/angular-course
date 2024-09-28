import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClient, HttpClient } from "@angular/common/http";
import { CourseCardComponent } from './course-card.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Course } from '../../model/course';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardComponent ],
      providers: [provideHttpClient()],
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar usuario valido', () => {
    const id:number = 1;
    const description:string = 'description';
    const iconUrl: string = 'iconUrl';
    const longDescription: string = 'longDescription';
    const category:string = 'category';
    const lessonsCount:number = 3;
    const course = new Course(id,description,iconUrl,longDescription,category,lessonsCount)
    component.course = new Course(id,description,iconUrl,longDescription,category,lessonsCount);
    expect(component.course).toEqual(course);
  });

  it('Debe retornar usuario valido', () => {
    component.cardIndex = 1;
    const cardIndex = 1;
    expect(component.cardIndex).toEqual(cardIndex);
  });

});

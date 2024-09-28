import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourseTitleComponent } from './course-title.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('CourseTitleComponent', () => {
  let component: CourseTitleComponent;
  let fixture: ComponentFixture<CourseTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTitleComponent ],
      providers: [],
      imports:[],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Verificar titulo', () => {
    component.title = 'Titulo 1';
    const title = 'Titulo 1';
    expect(component.title).toEqual(title);
  
    component.title = 'Titulo 2';
    const title2 = 'Titulo 2';
    expect(component.title).toEqual(title2);
  });
});



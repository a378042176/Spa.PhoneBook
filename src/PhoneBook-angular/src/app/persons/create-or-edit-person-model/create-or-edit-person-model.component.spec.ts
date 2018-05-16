import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditPersonModelComponent } from './create-or-edit-person-model.component';

describe('CreateOrEditPersonModelComponent', () => {
  let component: CreateOrEditPersonModelComponent;
  let fixture: ComponentFixture<CreateOrEditPersonModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditPersonModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditPersonModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

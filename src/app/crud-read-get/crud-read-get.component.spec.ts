import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReadGetComponent } from './crud-read-get.component';

describe('CrudReadGetComponent', () => {
  let component: CrudReadGetComponent;
  let fixture: ComponentFixture<CrudReadGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudReadGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReadGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReadListComponent } from './crud-read-list.component';

describe('CrudReadListComponent', () => {
  let component: CrudReadListComponent;
  let fixture: ComponentFixture<CrudReadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudReadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

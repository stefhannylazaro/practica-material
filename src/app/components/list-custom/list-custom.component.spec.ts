import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomComponent } from './list-custom.component';

describe('ListCustomComponent', () => {
  let component: ListCustomComponent;
  let fixture: ComponentFixture<ListCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

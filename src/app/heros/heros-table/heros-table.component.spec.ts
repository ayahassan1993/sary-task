import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosTableComponent } from './heros-table.component';

describe('HerosTableComponent', () => {
  let component: HerosTableComponent;
  let fixture: ComponentFixture<HerosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

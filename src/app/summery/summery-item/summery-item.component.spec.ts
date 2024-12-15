import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryItemComponent } from './summery-item.component';

describe('SummeryItemComponent', () => {
  let component: SummeryItemComponent;
  let fixture: ComponentFixture<SummeryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummeryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

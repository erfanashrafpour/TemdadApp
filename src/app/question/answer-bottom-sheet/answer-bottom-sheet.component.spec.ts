import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBottomSheetComponent } from './answer-bottom-sheet.component';

describe('AnswerBottomSheetComponent', () => {
  let component: AnswerBottomSheetComponent;
  let fixture: ComponentFixture<AnswerBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

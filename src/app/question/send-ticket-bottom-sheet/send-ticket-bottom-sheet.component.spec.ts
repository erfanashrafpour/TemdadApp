import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTicketBottomSheetComponent } from './send-ticket-bottom-sheet.component';

describe('SendTicketBottomSheetComponent', () => {
  let component: SendTicketBottomSheetComponent;
  let fixture: ComponentFixture<SendTicketBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendTicketBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendTicketBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

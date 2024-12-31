import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTicketComponent } from './send-ticket.component';

describe('SendTicketComponent', () => {
  let component: SendTicketComponent;
  let fixture: ComponentFixture<SendTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

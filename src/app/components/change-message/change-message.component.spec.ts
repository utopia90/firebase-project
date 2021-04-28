import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMessageComponent } from './change-message.component';

describe('ChangeMessageComponent', () => {
  let component: ChangeMessageComponent;
  let fixture: ComponentFixture<ChangeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

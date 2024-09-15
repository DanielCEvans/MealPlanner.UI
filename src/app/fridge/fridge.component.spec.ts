import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrigeComponent } from './fridge.component';

describe('FridgeComponent', () => {
  let component: FrigeComponent;
  let fixture: ComponentFixture<FrigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrigeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMealsComponent } from './select-meals.component';

describe('SelectMealsComponent', () => {
  let component: SelectMealsComponent;
  let fixture: ComponentFixture<SelectMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

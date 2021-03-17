import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenlmFormComponent } from './openlm-form.component';

describe('OpenlmFormComponent', () => {
  let component: OpenlmFormComponent;
  let fixture: ComponentFixture<OpenlmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenlmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenlmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

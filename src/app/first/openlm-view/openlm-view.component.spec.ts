import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenlmViewComponent } from './openlm-view.component';

describe('OpenlmViewComponent', () => {
  let component: OpenlmViewComponent;
  let fixture: ComponentFixture<OpenlmViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenlmViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenlmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamformComponent } from './examform.component';

describe('ExamformComponent', () => {
  let component: ExamformComponent;
  let fixture: ComponentFixture<ExamformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

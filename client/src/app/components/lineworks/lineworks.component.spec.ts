import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineworksComponent } from './lineworks.component';

describe('LineworksComponent', () => {
  let component: LineworksComponent;
  let fixture: ComponentFixture<LineworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

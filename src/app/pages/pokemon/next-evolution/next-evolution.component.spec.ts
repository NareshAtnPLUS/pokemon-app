import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEvolutionComponent } from './next-evolution.component';

describe('NextEvolutionComponent', () => {
  let component: NextEvolutionComponent;
  let fixture: ComponentFixture<NextEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

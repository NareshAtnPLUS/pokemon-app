import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessPokemonComponent } from './weakness-pokemon.component';

describe('WeaknessPokemonComponent', () => {
  let component: WeaknessPokemonComponent;
  let fixture: ComponentFixture<WeaknessPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaknessPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaknessPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

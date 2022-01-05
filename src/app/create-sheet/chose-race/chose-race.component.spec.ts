import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseRaceComponent } from './chose-race.component';

describe('ChoseRaceComponent', () => {
  let component: ChoseRaceComponent;
  let fixture: ComponentFixture<ChoseRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

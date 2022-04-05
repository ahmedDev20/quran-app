import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahSelectComponent } from './surah-select.component';

describe('SurahSelectComponent', () => {
  let component: SurahSelectComponent;
  let fixture: ComponentFixture<SurahSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurahSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

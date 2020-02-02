import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeldiWeddingsComponent } from './beldi-weddings.component';

describe('BeldiWeddingsComponent', () => {
  let component: BeldiWeddingsComponent;
  let fixture: ComponentFixture<BeldiWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeldiWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeldiWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

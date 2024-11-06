import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionadorComponent } from './adicionador.component';

describe('AdicionadorComponent', () => {
  let component: AdicionadorComponent;
  let fixture: ComponentFixture<AdicionadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

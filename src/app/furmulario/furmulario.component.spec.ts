import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurmularioComponent } from './furmulario.component';

describe('FurmularioComponent', () => {
  let component: FurmularioComponent;
  let fixture: ComponentFixture<FurmularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurmularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurmularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

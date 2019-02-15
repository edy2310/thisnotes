import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnounceComponent } from './create-announce.component';

describe('CreateAnnounceComponent', () => {
  let component: CreateAnnounceComponent;
  let fixture: ComponentFixture<CreateAnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

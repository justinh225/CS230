import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationTwoComponent } from './top-navigation-two.component';

describe('TopNavigationTwoComponent', () => {
  let component: TopNavigationTwoComponent;
  let fixture: ComponentFixture<TopNavigationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavigationTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavigationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

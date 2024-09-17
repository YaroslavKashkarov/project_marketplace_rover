import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSearchResultPageComponent } from './no-search-result-page.component';

describe('NoSearchResultPageComponent', () => {
  let component: NoSearchResultPageComponent;
  let fixture: ComponentFixture<NoSearchResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSearchResultPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoSearchResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

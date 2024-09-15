import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DollarPrefixDirective } from './dollar-prefix.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <input type="text" id="testInput" appDollarPrefix value="123" /> `,
  standalone: true,
  imports: [DollarPrefixDirective],
})
class TestComponent {}

describe('DollarPrefixDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
    inputElement = fixture.debugElement.query(By.css('#testInput')).nativeElement;
  });

  it('should create an instance', () => {
    expect(inputElement).toBeTruthy();
  });

  it('should add $ to the input value if not present', () => {
    inputElement.value = '123';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputElement.value).toBe('$123');
  });

  it('should not add $ if already present', () => {
    inputElement.value = '$456';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputElement.value).toBe('$456');
  });

  it('should handle empty input without adding $', () => {
    inputElement.value = '';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputElement.value).toBe('');
  });
});

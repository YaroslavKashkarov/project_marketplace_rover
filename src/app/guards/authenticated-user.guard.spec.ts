import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthenticationService } from '../components/services/authentication.service';
import { authenticatedUserGuard } from './authenticated-user.guard';

describe('authenticatedUserGuard', () => {
  let guard: authenticatedUserGuard;
  let authServiceMock: jasmine.SpyObj<AuthenticationService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceMock = jasmine.createSpyObj('AuthenticationService', ['currentUserValue']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        authenticatedUserGuard,
        { provide: AuthenticationService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    guard = TestBed.inject(authenticatedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    spyOnProperty(authServiceMock, 'currentUserValue', 'get').and.returnValue({
      id: '1',
      firstName: 'Test User',
      lastName: 'sczs',
      email: 'zvz',
      role: 'sxv',
      token: 'zv',
    });

    const result = guard.canActivate({} as any, {} as any); // Викликаємо canActivate
    expect(result).toBe(true); // Очікуємо true, оскільки користувач залогінений
  });

  it('should navigate to the login page if user is not authenticated', () => {
    // Симулюємо, що користувач не залогінений через spyOnProperty
    spyOnProperty(authServiceMock, 'currentUserValue', 'get').and.returnValue(null);

    guard.canActivate({} as any, {} as any); // Викликаємо canActivate
    expect(routerMock.navigate).toHaveBeenCalledWith(['']);
  });
});

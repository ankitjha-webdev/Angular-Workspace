// app/guards/csr-only.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CsrOnlyGuard implements CanActivate {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
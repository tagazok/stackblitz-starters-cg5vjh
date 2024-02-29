import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CurrentProductService {
  readonly currentId = signal<number | null>(null);
}

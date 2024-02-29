import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrentProductService } from '../../current-product.service';

interface Product {
  id: number;
  name: string;
}

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterLink],
})
export class HomeComponent {
  currentProductService = inject(CurrentProductService);
  hoverItem: number = 1;
  products: Product[] = [
    {
      id: 1,
      name: 'Coffee Classic',
    },
    {
      id: 2,
      name: 'Coffee Express',
    },
    {
      id: 3,
      name: 'Brewed Coffee',
    },
  ];

  setCurrentId(id: number) {
    this.currentProductService.currentId.set(id);
  }

  returnViewTransition(currentId: number) {
    return this.currentProductService.currentId() === currentId ? 'banner' : '';
  }
}

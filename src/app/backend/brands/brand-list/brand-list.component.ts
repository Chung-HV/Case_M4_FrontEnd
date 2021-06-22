import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

import { Brand } from '../../_models/brand';
import { BrandService } from '../../_services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;

  brands!: Brand[];

  constructor(
    private brandService: BrandService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(): void {
    this.brandService
      .getAll()
      .pipe(first())
      .subscribe((brands) => {
        this.brands = brands;
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getBrands();
  }
}

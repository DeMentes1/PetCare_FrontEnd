import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {ProductEntity} from "../../model/product-entity";

@Component({
  selector: 'app-new-product-publish-view',
  templateUrl: './new-product-publish-view.component.html',
  styleUrl: './new-product-publish-view.component.css'
})
export class NewProductPublishViewComponent {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      productCategory: ['', Validators.required],
      productImage: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData: ProductEntity = this.productForm.value;
      this.productService.create(productData).subscribe(response => {
        console.log('Product published successfully!', response);
      }, error => {
        console.error('Error publishing product', error);
      });
    }
  }
}

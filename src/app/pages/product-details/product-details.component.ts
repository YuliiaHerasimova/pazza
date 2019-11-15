import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  productId: number;
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private location: Location){
    
    this.getMyProduct();
  }

  ngOnInit() {
  }

  private getMyProduct(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
    // this.productId = Number(this.route.snapshot.paramMap.get('id')); 
    this.productsService.getJsonOneProduct(this.productId).subscribe(
      data => {
        this.product = data;
      },
      err => {
        console.log(err);
      }

    )

  }
}
// goBack()
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  public categories:Array<object>;
  public CategoryId;
  constructor(public productService: ProductService, public categoryService: CategoryService) { }

  ngOnInit(){
    this.categoryService.getAll()
    .subscribe(
      res=>this.categories=res,
      error=>console.log(error)
    )
  }
  changeCategory(event){
    console.log(event.target.value)
  }
  addProduct(event: any): void {
    const form = event.target;
    const product = {
      name: form.name.value,
      price: form.price.value,
      amount: form.amount.value,
      image_path: form.image_path.value,
      avaliable: form.avaliable.value,
      CategoryId:this.CategoryId,
    }
    this.productService.insert(product)
      .subscribe(
        res => {
          console.log(res)
        },
        error => console.log(error)
      )
  }
}

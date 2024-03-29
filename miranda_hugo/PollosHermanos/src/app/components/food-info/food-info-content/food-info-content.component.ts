import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService, FoodItem } from '../../../database.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-food-info-content',
  templateUrl: './food-info-content.component.html',
  styleUrls: ['./food-info-content.component.css']
})
export class FoodInfoContentComponent implements OnInit {

  @Input() contentId: number;
  @Input() typeOfContent: string;

  public test:number;
  public foodItem : FoodItem;

  fooditem(fooditem: FoodItem) {
    return fooditem.id === this.contentId;
  }

  public isImage: boolean = false;
  public isText: boolean = false;
  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.foodItem = this.db.getFoodItems().find((item)=>{
      return item.id=== this.contentId;
    });
    console.log(this.contentId);
    (this.typeOfContent === 'image')? this.isImage = true : this.isImage = false;
    (this.typeOfContent === 'text')? this.isText = true : this.isText = false;

  }

}

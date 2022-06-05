import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { Tag } from 'src/app/shared/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=> food.id == id)!;

  }
  
  getAllFoodByTag(tag:string):Foods[]{
   return tag=="All"?
   this.getAll() :this.getAll().filter(food=> food.tags?.includes(tag));
  }
  
  getAllTag():Tag[]{
    return[
      { name:'All',count:10},
      { name:'Dosa',count:3},
      { name:'Idli',count:2},
      { name:'Uttapam',count:1},
      { name:'Rasam',count:1},
      { name:'Appam',count:1},
      { name:'Special Dishes',count:2},
    ];
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Appam',
        cookTime:'15-20',
        price:10,
        favorite:true,
        origins:['Rava Appam'],
        star:4.5,
        imageUrl:'/assets/images/appam.jpg',
        tags:['Appam','All'],

      },
      {
        id:2,
        name:'Cheese Masala Dosa',
        cookTime:'10-15',
        price:25,
        favorite:true,
        origins:['Stuffed with cheese'],
        star:4.5,
        imageUrl:'/assets/images/Sponge-dosa.jpg',
        tags:['Dosa','All'],

      },
      {
        id:3,
        name:'Idli Fry',
        cookTime:'10-15',
        price:15,
        favorite:true,
        origins:['Fried with special spices'],
        star:4.5,
        imageUrl:'/assets/images/Mini_Idli.jpg',
        tags:['Idli','All'],

      },
      {
        id:4,
        name:'Idli',
        cookTime:'5-10',
        price:12,
        favorite:true,
        origins:['Served with chutney and rassam'],
        star:4.5,
        imageUrl:'/assets/images/Idli.png',
        tags:['Idli','All'],

      },
      {
        id:5,
        name:'Masala Dosa',
        cookTime:'10-15',
        price:15,
        favorite:true,
        origins:['Stuffed with spiced and savory potato filling'],
        star:4.5,
        imageUrl:'/assets/images/rava-dosa.jpg',
        tags:['Dosa','All'],

      },
      {
        id:6,
        name:'Onion Uttapam',
        cookTime:'10-15',
        price:17,
        favorite:true,
        origins:['Topped with Onions'],
        star:4.5,
        imageUrl:'/assets/images/Uttappam.png',
        tags:['Uttapam','All'],

      },
      {
        id:7,
        name:'Plain Dosa',
        cookTime:'5-10',
        price:10,
        favorite:true,
        origins:['Made with a fermented batter of rice'],
        star:4.5,
        imageUrl:'/assets/images/Mysore-Masala-Dosa.jpg',
        tags:['Dosa','All'],

      },
      {
        id:8,
        name:'Rasam',
        cookTime:'5-10',
        price:15,
        favorite:true,
        origins:['A soup of spices'],
        star:4.5,
        imageUrl:'/assets/images/tomato-rasam.jpg',
        tags:['Rasam','All'],

      },
      {
        id:9,
        name:'Rasam Rice',
        cookTime:'10-15',
        price:27,
        favorite:true,
        origins:['Made from combining rice and rasam'],
        star:4.5,
        imageUrl:'/assets/images/rasam rice.jpg',
        tags:['Special Dishes','All'],

      },
      {
        id:10,
        name:'Paal Payasam',
        cookTime:'10-15',
        price:30,
        favorite:true,
        origins:['Kheer made with rice and milk'],
        star:4.5,
        imageUrl:'/assets/images/momos.jpg',
        tags:['Special Dishes','All'],

      }

    ];
  }
}
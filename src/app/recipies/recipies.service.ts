import { Injectable } from '@angular/core';
import { Recipe } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  recepies: Recipe[] = [
    {
      id: 'r1',
      title: 'first recipe',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
      ingredients: ['garlick', 'tomato', 'pork']
    },
    {
      id: 'r2',
      title: 'two recipe',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
      ingredients: ['garlick', 'tomato', 'pork']
    }
  ];

  constructor() { }

  getAllRecipies() {
    return [...this.recepies];
  }

  getRecipie(id: string) {
    return {
        ...this.recepies.find(recipie => {
         return id === recipie.id;
      })
    };
  }

  deleteRecipe(id: string) {
    this.recepies = this.recepies.filter(recepie => {
      return recepie.id !== id;
    });
  }
}

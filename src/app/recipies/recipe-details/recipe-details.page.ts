import { RecipiesService } from './../recipies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipie.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipiesService,
    private router: Router,
    private alertControler: AlertController
  ) { }

  ngOnInit() {
    // subscribe dynamic id from URL params
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipies']);
        return ;
      }
      const recipeId = paramMap.get('recipeId');
      // siking obj with id
      this.loadedRecipe = this.recipeService.getRecipie(recipeId);
    });
  }

  // wrapper delete mettod
  onDeleteRecipe() {
    // create ALERT message
    this.alertControler.create({
      header: 'Are you shure?',
      message: 'Do you realy wont to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // main delete method
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            // programing ROUTER navigation
            this.router.navigate(['/recipies']);
          }
        }
      ]
    }).then(aletrt => {
      aletrt.present();
    });
  }

}

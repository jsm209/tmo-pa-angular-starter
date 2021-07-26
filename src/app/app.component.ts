import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pa-starter-angular';
  recipes: any[] = [];
  showRecipeForm: boolean = false;

  recipeName: string = '';
  recipeInstructions: string = '';


  ngOnInit() {

  }

  clearRecipeForm() {
    this.recipeName = '';
    this.recipeInstructions = '';
  }

  toggleShowRecipeForm(isVisible: boolean) {
    this.showRecipeForm = isVisible;

    // If the form is toggled open, make sure the form clears itself from previous attempts
    if (isVisible) {
      this.clearRecipeForm();
    } else {
      // If we're trying to close the form, submit the recipe to the total recipes
      this.addRecipe();
    }
  }

  addRecipe() {
    let addedRecipe = {
      name: this.recipeName,
      instructions: this.recipeInstructions
    }

    this.recipes.push(addedRecipe);
  }


}

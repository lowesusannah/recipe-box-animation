import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Recipe Box</h1>
    </div>
    <div id="recipe-box">
      <img src="./resources/img/box-front.png" usemap="#box-buttons" (click)="hoverIt()">
      <img src="./resources/img/box-back.png">
      <map name="box-buttons">
        <area shape="rect" coords="134,348,399,876" (click)="prevRecipe()">
        <area shape="rect" coords="471,405,522,595" (click)="nextRecipe()">
      </map>
      <div class="cards" [id]="hovered">
        <div *ngFor="let recipe of recipeBox">
          <div (click)="hoverIt()" *ngIf="recipe.id === currentRecipe" [class]='"card well " + getCardClass(recipe.id)'>
            <h2>{{recipe.name}}</h2>
            <h3>Ingredients</h3>
            <ul>
              <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
            </ul>
            <h3>Directions</h3>
            <p>{{recipe.directions}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  // Component logic
  currentRecipe = 1;
  hovered: string = "";
  firstRecipe: Recipe = new Recipe(
    "Pumpkin Bread",
    ["2 cups all-purpose flour, spooned into measuring cup and leveled-off",
    "1/2 teaspoon salt",
    "1 teaspoon baking soda",
    "1/2 teaspoon baking powder",
    "1 teaspoon ground cloves",
    "1 teaspoon ground cinnamon",
    "1 teaspoon ground nutmeg",
    "1-1/2 sticks (3/4 cup) unsalted butter, softened",
    "2 cups sugar",
    "2 large eggs",
    "1 15-oz can 100% pure pumpkin (I use Libby's)"],
    `Preheat the oven to 325°F and set an oven rack in the middle position. Generously grease two 8 x 4-inch loaf pans with butter and dust with flour (alternatively, use a baking spray with flour in it, such as Pam with Flour or Baker's Joy).
    In a medium bowl, combine the flour, salt, baking soda, baking powder, cloves, cinnamon, and nutmeg. Whisk until well combined; set aside.
    In a large bowl of an electric mixer, beat the butter and sugar on medium speed until just blended. Add the eggs one at a time, beating well after each addition. Continue beating until very light and fluffy, a few minutes. Beat in the pumpkin. The mixture might look grainy and curdled at this point -- that's okay.
    Add the flour and mix on low speed until combined.
    Turn the batter into the prepared pans, dividing evenly, and bake for 65 – 75 minutes, or until a cake tester inserted into the center comes out clean. Let the loaves cool in the pans for about 10 minutes, then turn out onto a wire rack to cool completely.
    Fresh out of the oven,the loaves have a deliciously crisp crust. If they last beyond a day, you can toast individual slices to get the same fresh-baked effect.`,
    0);

    secondRecipe: Recipe = new Recipe(
      "Pancakes",
      ["1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 teaspoon salt",
      "1 tablespoon white sugar",
      "1 1/4 cups milk",
      "1 egg",
      "3 tablespoons butter, melted"],
      `In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.
      Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.`,
      1);

    recipeBox: Recipe[] = [this.firstRecipe, this.secondRecipe];

    prevRecipe() {
      this.currentRecipe--;
      if (this.currentRecipe < 0) {
        this.currentRecipe = this.recipeBox.length - 1;
      }
    }

    nextRecipe() {
      this.currentRecipe++;
      this.currentRecipe %= this.recipeBox.length;
    }

    hoverIt() {
      if(this.hovered) {
        this.hovered = "";
      }
      else {
        this.hovered = "transform";
      }
    }

    getCardClass(id: number) {
      return "card-" + id;
    }
}

export class Recipe {
  constructor(public name: string, public ingredients: string[], public directions: string, public id: number) {}
}

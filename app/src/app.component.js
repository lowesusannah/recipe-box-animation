"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // Component logic
        this.currentRecipe = 1;
        // hovered: string = "";
        this.firstRecipe = new Recipe("Pumpkin Bread", ["2 cups all-purpose flour, spooned into measuring cup and leveled-off",
            "1/2 teaspoon salt",
            "1 teaspoon baking soda",
            "1/2 teaspoon baking powder",
            "1 teaspoon ground cloves",
            "1 teaspoon ground cinnamon",
            "1 teaspoon ground nutmeg",
            "1-1/2 sticks (3/4 cup) unsalted butter, softened",
            "2 cups sugar",
            "2 large eggs",
            "1 15-oz can 100% pure pumpkin (I use Libby's)"], "Preheat the oven to 325\u00B0F and set an oven rack in the middle position. Generously grease two 8 x 4-inch loaf pans with butter and dust with flour (alternatively, use a baking spray with flour in it, such as Pam with Flour or Baker's Joy).\n    In a medium bowl, combine the flour, salt, baking soda, baking powder, cloves, cinnamon, and nutmeg. Whisk until well combined; set aside.\n    In a large bowl of an electric mixer, beat the butter and sugar on medium speed until just blended. Add the eggs one at a time, beating well after each addition. Continue beating until very light and fluffy, a few minutes. Beat in the pumpkin. The mixture might look grainy and curdled at this point -- that's okay.\n    Add the flour and mix on low speed until combined.\n    Turn the batter into the prepared pans, dividing evenly, and bake for 65 \u2013 75 minutes, or until a cake tester inserted into the center comes out clean. Let the loaves cool in the pans for about 10 minutes, then turn out onto a wire rack to cool completely.\n    Fresh out of the oven,the loaves have a deliciously crisp crust. If they last beyond a day, you can toast individual slices to get the same fresh-baked effect.", 0);
        this.secondRecipe = new Recipe("Pancakes", ["1 1/2 cups all-purpose flour",
            "3 1/2 teaspoons baking powder",
            "1 teaspoon salt",
            "1 tablespoon white sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tablespoons butter, melted"], "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.\n      Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.", 1);
        this.recipeBox = [this.firstRecipe, this.secondRecipe];
    }
    AppComponent.prototype.prevRecipe = function () {
        this.currentRecipe--;
        if (this.currentRecipe < 0) {
            this.currentRecipe = this.recipeBox.length - 1;
        }
    };
    AppComponent.prototype.nextRecipe = function () {
        this.currentRecipe++;
        this.currentRecipe %= this.recipeBox.length;
    };
    // hoverIt() {
    //   this.hovered = "transform";
    // }
    AppComponent.prototype.getCardClass = function (id) {
        return "card-" + id;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Recipe Box</h1>\n    </div>\n    <div id=\"recipe-box\">\n      <img src=\"./resources/img/box-front.png\" usemap=\"#box-buttons\">\n      <img src=\"./resources/img/box-back.png\">\n      <map name=\"box-buttons\">\n        <area shape=\"rect\" coords=\"134,348,399,876\" (click)=\"prevRecipe()\">\n        <area shape=\"rect\" coords=\"471,405,522,595\" (click)=\"nextRecipe()\">\n      </map>\n      <div class=\"cards\">\n        <div *ngFor=\"let recipe of recipeBox\">\n          <div *ngIf=\"recipe.id === currentRecipe\" [class]='\"card well \" + getCardClass(recipe.id)'>\n            <h2>{{recipe.name}}</h2>\n            <h3>Ingredients</h3>\n            <ul>\n              <li *ngFor=\"let ingredient of recipe.ingredients\">{{ingredient}}</li>\n            </ul>\n            <h3>Directions</h3>\n            <p>{{recipe.directions}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(name, ingredients, directions, id) {
        this.name = name;
        this.ingredients = ingredients;
        this.directions = directions;
        this.id = id;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map
const buttonId = ["tinuom", "lansiao", "chikBinakol", "cansi", "humba", "lumpiangUbod", "kinilaw", "paklay", "halang", "basuy"]

const dishTitle = ["Tinuom", "Lansiao", "Chiken Binakol", "Cansi", "Humba", "Lumpiang Ubod", "Kinilaw na Tanigue", "Paklay", "Chicken Halang-Halang", "Bas-Uy"]

const dishImg = ["styles/img/1.jpeg", "styles/img/2.jpeg", "styles/img/3.jpeg", "styles/img/4.jpeg", "styles/img/5.jpeg", "styles/img/6.jpeg", "styles/img/7.jpeg", "styles/img/8.jpeg", "styles/img/9.jpeg", "styles/img/10.jpeg"]

let index;


const Ingredients = [
["8 pcs chicken thighs", "2 pcs red onion", "2 pcs tomato, quartered", "8 slices ginger", "8 pcs lemongrass stalks", "salt", "freshly ground black pepper", "banana leaves", "kitchen twine, for tying", "Broth", "1 1/2 cups chicken stock", "1 1/2 cup water", "2 tbsp fish sauce", "2 pcs white onion, quartered"],
["800 g bulls’ testes and testicles, cleaned and parboiled", "200 g beef tendons", "8 stalks lemongrass", "2 stalks spring onions, chopped then separate white and green sections", "1 packet sibot herb mix", "4 pcs birds eye chilies, roughly chopped", "2 thumb sized ginger, thinly sliced", "2 white onions, chopped", "1 whole head garlic, minced", "4 cups beef stock", "4 cups water", "2 cups beef broth", "freshly ground black pepper", "fish sauce", "oil"], 
["1 1/4 cups (3 1/2 ounces; 100g) shredded unsweetened coconut", "1 tablespoon (15ml) canola or other neutral oil", "8 chicken drumsticks (about 2 1/2 pounds; 1.1kg), patted dry with paper towels", "Kosher salt and freshly ground black pepper", "14 medium garlic cloves, minced", "1/2 medium white onion (about 3 ounces; 85g), thinly sliced", "8 1/2 cups (2L) unsweetened coconut water, such as Harmless Harvest", "4 cups (0.9L) homemade or store-bought chicken stock", "4 stalks lemongrass (7 ounces; 200g), bottoms smashed under the flat side of a knife", "Four 3-inch knobs fresh ginger (70g), quartered", "1 scallion, ends trimmed and sliced thinly on a bias for garnish, trimmings reserved", "2 chayote squash (about 14 ounces; 400g), peeled, quartered, seeded, and thinly sliced", "2 tablespoons (30ml) fish sauce", "Kosher salt", "8 ounces (225g) fresh spinach, rinsed"],
["2 lbs. beef shank", "2 stalks lemongrass tied into knots with thick end crushed", "1 plum tomato wedged", "3 pieces long green chili siling pansigang", "3 pieces hot red chili pepper optional", "7 cloves garlic crushed", "1 medium yellow onion wedged", "4 tablespoons annatto oil", "1 beef cube", "2 20g pack Sinigang sa sampaloc mix", "3 cups sliced unripe jackfruit", "8 to 10 cups water", "3 tablespoons fish sauce patis"],
["2 lbs pork belly", "1 cup Pineapple juice", "1 large onion diced", "5 cloves garlic minced", "2 tablespoons salted black beans", "2 tablespoons soy sauce", "2 tablespoons vinegar", "2 ½ tablespoons brown sugar", "½ cup dried banana blossoms", "2 pieces dried bay leaves", "1 teaspoon whole peppercorn"],
["1 lb. hearts of palm ubod", "1 piece Knorr Shrimp Cube", "4 ounces pork thinly sliced", "12 pieces shrimp deveined", "1 carrot julienne", "2 tablespoons parsley chopped", "1 piece onion chopped", "4 cloves garlic crushed", "3 tablespoons cooking oil", "Fish sauce and ground black pepper to taste", "8 pieces lettuce leaves", "1/2 cup roasted peanut crushed", "1 cup water", "Fresh Lumpia Wrapper Ingredients", "1 cup all-purpose flour", "2 pieces eggs", "2 tablespoons canola oil", "1 1/2 cups water", "1/4 cup cooking oil or cooking oil spray", "Lumpia Sauce Ingredients", "6 tablespoons brown sugar", "1 1/2 tablespoons soy sauce", "1 1/2 cups water", "6 cloves garlic crushed", "1 tablespoon cornstarch"],
["2 lbs. Tanigue Wahoo fish, fillet and cut into cubes", "2 thumbs fresh ginger minced", "8 pieces hot chili Thai chili or siling labuyo, chopped", "15 to 20 pieces calamansi", "1 medium red onion chopped into small pieces", "¼ teaspoon ground black pepper", "½ teaspoon sugar", "Salt to taste"],
["1 cup julienned Bamboo shoots", "1 lb. pig liver, sliced into thin strips", "1 (20 oz.) can Pineapple chunks, drained", "5 pieces dried bay leaves", "½ lb. pig kidney, cleaned", "½ lb. pig heart", "1 lb. ox tripe", "½ lb. pig stomach", "1 large red onion, minced", "1 head garlic, minced", "2½ teaspoons Annatto powder", "2 thumbs ginger, minced", "1 large red bell pepper, julienned", "1 piece beef cube (or 2 teaspoons beef powder)", "2 cups water (for cooking)", "5 cups water (for boiling)", "Salt and pepper to taste", "3 tablespoons olive oil"],
["2 lbs. chicken cut into serving pieces", "1 can 2 cups coconut milk", "1 medium yellow onion diced", "1 teaspoon minced garlic", "1 thumb ginger julienne", "2 teaspoons chili flakes", "6 to 8 lemongrass blades", "1 small green papaya wedged", "3/4 to 1 cup hot pepper leaves or malunggay", "2 tablespoons fish sauce", "1/4 teaspoon ground black pepper", "3 tablespoons cooking oil"],
["1 lb. pork shoulder sliced", "1/2 lb. pig liver sliced", "2 pieces chayote sliced", "4 stalks green onion or onion leek; cut in 2 inch length", "1 thumb ginger julienne", "1 medium yellow onion minced", "3 cloves garlic minced", "2 stalks lemongrass tied", "6 cups beef or pork broth", "3 tablespoons cooking oil", "Salt and pepper to taste"]
]

const Procedure = [
["Prepare a large piece of banana leaf. Place a slice of ginger at the bottom of the leaf. Then, place the chicken on top of the ginger. Add slices of red onion, a quarter of tomato, and a piece of lemongrass stalk on the chicken. Season with salt and freshly ground black pepper.", "Bring the ends of the banana leaf together to wrap the chicken, securing it with kitchen twine. Repeat the same steps for the remaining tinuom ingredients.", "Take a deep pot and place the wrapped chicken parcels inside. Add all the broth ingredients into the pot. Bring it to a slow boil.", "After an hour, turn off the heat. Carefully remove a chicken parcel from the pot and place it in a bowl.", "Open the parcel and pour some of the flavourful broth from the pot over the chicken.", "Serve the Tinuom na Manok while it’s still hot and enjoy the delicious combination of tender chicken and aromatic broth."],
["In a pot combine parboiled bulls’ testes and testicles, beef tendons, water, beef stock, lemongrass and sibot herb mix. Bring it to a boil and simmer in low heat covered for 3 1/2 hours or until very tender. Remove the testes, testicles, and tendons, set it aside. Discard lemongrass and sibot then reserve the liquid.", "Slice the testes, testicles, and tendons into bite sized pieces.", "In another pot, heat oil then sauté garlic, onions, white sections of spring onions and ginger until aromatic and onions are soft.", "Add the testes, testicles and tendons and chillies then sauté for 2 minutes.", "Pour the reserved liquid bring it to a boil then simmer for 30 minutes.", "Bring the heat to high slightly reduce the liquid, the collagen in the tendons will keep it slightly thicker. Season with fish sauce and lots of freshly ground black pepper.", "Pour into serving bowls topped with green parts of spring onions."],
["Adjust oven rack to top position and preheat to 375°F (190°C). Spread coconut on a rimmed baking sheet. Bake, shaking pan occasionally, until golden brown, about 10 minutes. Transfer toasted coconut to a small bowl; set aside.", "Line a rimmed baking sheet with paper towels. In a large Dutch oven, heat oil over medium-high heat until shimmering. Season chicken all over with salt and pepper and add to Dutch oven. Cook, turning occasionally, until chicken is well browned on all sides, about 12 minutes. Transfer chicken to prepared baking sheet and set aside.", "Add garlic and onion to now-empty Dutch oven and cook, stirring occasionally, until garlic is lightly browned and onion is translucent, about 5 minutes.", "Add coconut water, chicken stock, lemongrass, ginger, and scallion trimmings, along with reserved chicken and 3/4 cup plus 2 tablespoons reserved toasted coconut. Bring to a boil over high heat and cook for 15 minutes, then lower heat to maintain a steady simmer.", "Add chayote, cover, and cook until chayote and chicken are cooked through and tender, about 20 minutes. Discard lemongrass, ginger, and scallion trimmings. Add fish sauce and season with salt to taste.", "Add spinach, cover, and cook until soft, 3 to 5 minutes.", "To serve, divide chicken between soup bowls."],
["Heat Annatto oil in a soup pot or pressure cooker.", "Put the garlic in once the oil gets hot. Cook until the garlic turns light brown.", "Add the beef shank. Cook one side for 30 seconds to one minute. Turn it over to cook the other side for about the same time.", "Pour water. Let boil.", "Add the onion, tomato, and beef cube. Stir.", "Add the lemongrass. Cover the pressure cooker and cook for 30 minutes. Note: if using a regular soup pot, cook the beef in low heat for 2 to 3 hours. Add more water if needed.", "Safely remove the cover of the pressure cooker. Apply heat and bring the mixture to a boil.", "Stir-in the jackfruit and cook for 5 minutes.", "Add the peppers. Cook for 2 to 3 minutes.", "Pour the contents of the sinigang mix package. Stir. Add fish sauce. Cook for 3 to 5 minutes.", "Transfer to a serving bowl. Serve."],
["Heat the cooking pot then brown the pork belly", "Add the onions and garlic and cook until the onions are soft.", "Put-in the soy sauce, peppercorn, bay leaves", "Pour-in the pineapple juice and let boil. Simmer until the pork is tender (add water as needed)", "Add the vinegar and wait for the mixture to re-boil. Simmer for 3 minutes", "Spoon-in the salted black beans and brown sugar then simmer for 5 minutes", "Add the dried banana blossoms and simmer for 5 to 8 minutes", "Transfer to a serving plate and serve. Share and enjoy!"], 
["Make the lumpia filling. Start by heating 3 tablespoons oil in a pan. Saute onion and garlic until the onion softens.", "Add pork and saute until light brown. Pour 1 ½ cup water into the pan. Let boil.", "Add Knorr Shrimp Cube. Stir. Continue boiling in medium heat until the liquid evaporates.", "Add hearts of palm (ubod). Cook for 5 minutes. Toss every few seconds.", "Add carrots. Cook for 3 minutes.", "Put the shrimp into the pan. Toss and continue cooking until shrimp turns orange.", "Add chopped parsley and season with ground black pepper and fish sauce. Set aside.", "Make the sauce by pouring water in a saucepan. Let it boil."],
["Squeeze the juice out of the calamansi over a large bowl. Use a sieve to filter the seeds. Discard the seeds.", "In the bowl with calamansi juice, add sugar, ½ teaspoon salt, and ground black pepper. Stir until the sugar and salt are diluted.", "Add the ginger, chili, and onion. Stir for a few seconds until all ingredients are well blended.", "Arranged the raw fish cubes in a large bowl. Pour the calamansi mixture. Toss until the fish cubes are coated. Let is stay for 10 minutes.", "Toss one more time and taste. Add more salt if needed. You can also add more calamansi juice if needed. Toss to blend all the ingredients. Securely cover the bowl and place it inside the refrigerator. Let it chill for at least 3 hours.", "Serve. Share and enjoy!"],
["Boil 6 cups of water in a pot.", "Once water is boiling, add 1 tbsp. salt, pig stomach, and ox tripe. Boil over a medium heat for 1 hr.", "Add the kidney and heart. Continue to boil for another 1 hr or until all the innards are tender.", "Discard the water and let the innards cool down.", "Chop the innards and set aside.", "Meanwhile, heat the cooking oil in a large clean cooking pot.", "Sauté the onion, garlic, and ginger.", "Once the onion gets soft, add the chopped innards, bay leaves, and liver. Cook for 3 minutes.", "Add the pineapple chunks, bell pepper, and beef cube.", "Pour in 2 cups of water and add the annatto powder. Stir and let boil.", "Add the bamboo shoots. Cover and simmer for 25 minutes. Add more water if needed.", "Serve while hot."],
["Heat the oil in a cooking pot.", "When the oil gets hot, saute the onion, garlic, and ginger until the onion becomes soft.", "Add the chicken pieces. Cook until light to medium brown. Turn over to cook the other side.", "Pour-in coconut milk. Let boil. Add chili flakes, lemongrass, and papaya. stir. Cover and the heat to medium. Cook for 18 to 20 minutes or until the chicken is fully cooked.", "Remove the cover. Add ground black pepper, fish sauce, and more chili flakes (if desired).", "Add the hot pepper leaves. Stir and cook for 2 minutes.", "Transfer to a serving plate. Serve."],
["Heat the cooking oil in a cooking pot.", "Once the oil becomes hot, sauté onion and ginger until the onion becomes soft.", "Add the sliced liver. Continue to sauté for 2 minutes. This will remove the gamy taste and aroma. Remove the liver and temporarily place in a clean plate.", "Put-in the garlic. Saute until color turns light brown.", "Add-in the pork. Cook for 3 to 5 minutes.", "Pour-in the beef broth. Let boil.", "Put-in the lemongrass. Cover and simmer for 30 to 45 minutes.", "Remove the lemongrass. Put-in the chayote and cooked liver. Continue to cook in medium heat for 3 to 5 minutes. Add water, if needed.", "Add-in the green onion or onion leeks. Cook for 2 minutes.", "Add salt and pepper to taste. You can also use fish sauce if you prefer.", "Serve hot with rice."]
]

function ingredProced(x){
document.getElementById("procedure").style.visibility = "visible";
 document.getElementById("dishTitle").textContent = dishTitle[x];

document.getElementById("dishImg").setAttribute("src", dishImg[x]);

for(let i=0; i < Ingredients[x].length; i++){
    let newIng = document.createElement('li')
    newIng.textContent = Ingredients[x][i]
    newIng.id = "Ingredients"
   document.getElementById("ingredients").append(newIng)
}

for(let i=0; i < Procedure[x].length; i++){
    let newPro = document.createElement('li')
    newPro.textContent = Procedure[x][i]
    newPro.id = "Procedures"
   document.getElementById("procedures").append(newPro)
}
}

for(let i=0; i<buttonId.length; i++){
    let button = document.getElementById(buttonId[i]);
    button.addEventListener("click", function (){ ingredProced(i); });
}


const closeBtn = document.getElementById("closeButton")
closeBtn.addEventListener("click", closeTab)

function closeTab(){
 document.getElementById("procedure").style.visibility = "hidden";
   
   const ingredients = document.getElementById("ingredients")
   const procedures = document.getElementById("procedures")
     
    while (ingredients.firstChild) { 
    ingredients.removeChild(ingredients.firstChild); 
    }
    
    while (procedures.firstChild) { 
    procedures.removeChild(procedures.firstChild); 
    }
}

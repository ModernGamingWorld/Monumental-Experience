let colors = ['cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black', 'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray']
let lootChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest']
let createStoneTypes = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria', 'natural_scoria']
let quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black']

let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => e.remove({ id: recipe }))
}

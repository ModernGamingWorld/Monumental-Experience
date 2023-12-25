let colors = ['cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black', 'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray']
let lootChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest']
let createStoneTypes = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria', 'natural_scoria']
let quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black']
let BotanyPotMaterial = ['terracotta', 'white_terracotta', 'orange_terracotta', 'magenta_terracotta', 'light_blue_terracotta', 'yellow_terracotta', 'lime_terracotta', 'pink_terracotta', 'gray_terracotta', 'light_gray_terracotta', 'cyan_terracotta', 'purple_terracotta', 'blue_terracotta', 'brown_terracotta', 'green_terracotta', 'red_terracotta', 'black_terracotta', 'white_concrete', 'orange_concrete', 'magenta_concrete', 'light_blue_concrete', 'yellow_concrete', 'lime_concrete', 'pink_concrete', 'gray_concrete', 'light_gray_concrete', 'cyan_concrete', 'purple_concrete', 'blue_concrete', 'brown_concrete', 'green_concrete', 'red_concrete', 'black_concrete', 'white_glazed_terracotta', 'orange_glazed_terracotta', 'magenta_glazed_terracotta', 'light_blue_glazed_terracotta', 'yellow_glazed_terracotta', 'lime_glazed_terracotta', 'pink_glazed_terracotta', 'gray_glazed_terracotta', 'light_gray_glazed_terracotta', 'cyan_glazed_terracotta', 'purple_glazed_terracotta', 'blue_glazed_terracotta', 'brown_glazed_terracotta', 'green_glazed_terracotta', 'red_glazed_terracotta', 'black_glazed_terracotta']
let gear = ['signalum', 'constantan', 'nickel', 'lead', 'silver', 'tin', 'steel', 'invar', 'electrum', 'bronze', 'iron', 'gold', 'diamond', 'copper', 'enderium', 'lumium']
let plates = ['brass', 'aluminum', 'nickel', 'platinum', 'tin', 'uranium', 'zinc', 'steel', 'invar', 'bronze', 'electrum', 'iron', 'gold', 'diamond', 'enderium', 'lumium', 'constantan', 'signalum']

let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => e.remove({ id: recipe }))
}

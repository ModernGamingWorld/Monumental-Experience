onEvent('recipes', e => {
	e.recipes.thermal.refinery([Item.of('emendatusenigmatica:bitumen_gem').chance(0.1), Fluid.of('thermal:heavy_oil', 40), Fluid.of('thermal:light_oil', 60)], Fluid.of('pneumaticcraft:oil', 100))
	e.recipes.thermal.refinery(['2x minecraft:sugar'], Fluid.of('thermal:syrup', 25))
	e.recipes.thermal.refinery(['industrialforegoing:dryrubber'], Fluid.of('industrialforegoing:latex', 900))
})

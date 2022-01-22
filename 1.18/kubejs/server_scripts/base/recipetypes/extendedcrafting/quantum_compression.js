onEvent('recipes', (event) => {
    event.recipes.extendedcrafting.compressor({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 1,
        "ingredient": {
            "tag": "forge:storage_blocks/arcane_crystal"
        },
        "catalyst": {
            "item": "extendedcrafting:elite_catalyst"
        },
        "result": {
            "item": "naturesaura:infused_stone"
        }
    });
});
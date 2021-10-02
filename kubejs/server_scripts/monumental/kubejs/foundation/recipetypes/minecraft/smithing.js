onEvent('recipes', event => {
    //event.smithing('Output', 'Input1', 'Input2')
    event.smithing('doom:argent_plate', 'doom:argent_energy', '#forge:ingots/netherite')

    //pickaxes

    event.smithing(Item.of('aiotbotania:livingwood_pickaxe', '{Damage:0,AS_Amulet_Holder:[I;955663911,-1640609137,-1846237562,1038191077]}'), 'minecraft:wooden_pickaxe', '#botania:livingwood')
    event.smithing(Item.of('aiotbotania:livingrock_pickaxe', '{Damage:0,AS_Amulet_Holder:[I;955663911,-1640609137,-1846237562,1038191077]}'), 'minecraft:stone_pickaxe', '#botania:livingrock')
    event.smithing(Item.of('aquaculture:neptunium_pickaxe', '{Damage:0,inWater:0b,AS_Amulet_Holder:[I;955663911,-1640609137,-1846237562,1038191077]}'), 'minecraft:netherite_pickaxe', '#forge:ingots/neptunium')
    event.smithing(Item.of('botania:manasteel_pick', '{Damage:0,AS_Amulet_Holder:[I;955663911,-1640609137,-1846237562,1038191077]}'), 'minecraft:iron_pickaxe', '#forge:ingots/manasteel')
    event.smithing(Item.of('botania:elementium_pickaxe', '{Damage:0,AS_Amulet_Holder:[I;955663911,-1640609137,-1846237562,1038191077]}'), 'minecraft:iron_pickaxe', '#forge:ingots/elementium')
})
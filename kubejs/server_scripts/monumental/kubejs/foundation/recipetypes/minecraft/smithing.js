onEvent('recipes', event => {
    //event.smithing('Output', 'Input1', 'Input2')
    event.smithing('doom:argent_plate', 'doom:argent_energy', '#forge:ingots/netherite')
    //Pickaxes
    event.smithing(Item.of('botania:manasteel_pick', '{Damage:0,AS_Amulet_Holder:[I;955663911,-1640609137,-1846237562,1038191077]}'), '#forge:ingots/manasteel', 'botania:livingwood_twig')
})
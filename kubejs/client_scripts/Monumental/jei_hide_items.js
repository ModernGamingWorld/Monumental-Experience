events.listen('jei.hide.items', (event) => {

    materialsToUnify.forEach((material) => {
        itemsToHide.push(
            'draconicevolution:' + material + '_ore',
            'byg:' + material + '_ore',
            'mythicbotany:' + material + '_ore',
            'zycraft:' + material + '_ore',
            'astralsorcery:' + material + '_ore',
            'druidcraft:' + material + '_ore',
            'bigreactors:' + material + '_ore',
            'forbidden_arcanus:' + material + '_ore',
            'atum:' + material + '_ore',
            'undergarden:' + material + '_ore',
            'mysticalagradditions:' + material + '_ore',
            'mysticalagriculture:' + material + '_ore',
            'mana-and-artifice:' + material + '_ore',
            'gobber2:' + material + '_ore',
            'tconstruct:' + material + '_ore',
            'gobber2:' + material + '_ore_nether',
            'gobber2:' + material + '_ore_end',
            'quark:' + material + '_ore',
            'iceandfire:' + material + '_ore',
            'biggerreactors:' + material + '_ore',
            'blue_skies:' + material + '_ore',
            'phosphophyllite:' + material + '_ore',
            'betterendforge:' + material + '_ore',
            'appliedenergistics2:' + material + '_ore'
        );
    });


    mobsToUnify.forEach((mobs) => {
        itemsToHide.push(
            'meetyourfight:' + mobs + '_spawn_egg',
            'mythicbotany:' + mobs + '_spawn_egg',
            'tconstruct:' + mobs + '_spawn_egg',
            'environmental:' + mobs + '_spawn_egg',
            'nasty:' + mobs + '_spawn_egg',
            'illagers_plus:' + mobs + '_egg',
            'mana-and-artifice:' + mobs + '_spawn_egg',
            'lava_monster:' + mobs + '_spawn_egg',
            'eidolon:spawn_' + mobs,
            'twilightforest:' + mobs + '_spawn_egg',
            'thermal:' + mobs + '_spawn_egg',
            'iceandfire:spawn_egg_' + mobs,
            'blue_skies:' + mobs + '_spawn_egg',
            'quark:' + mobs + '_spawn_egg',
            'occultism:spawn_egg/' + mobs,
            'atum:' + mobs + '_spawn_egg',
            'upgrade_aquatic:' + mobs + '_spawn_egg',
            'druidcraft:' + mobs + '_spawn_egg',
            'undergarden:' + mobs + '_spawn_egg',
            'doom:' + mobs + '_spawn_egg',
            'minecraft:' + mobs + '_spawn_egg',
            'alexsmobs:spawn_egg_' + mobs
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression);
    });

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });
});
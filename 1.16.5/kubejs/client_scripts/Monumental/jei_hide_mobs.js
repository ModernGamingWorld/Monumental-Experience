events.listen('jei.hide.items', (event) => {

mobsToUnify.forEach((mobs) => {
        itemsToHide.push(
            'aquaculture:' + mobs + '_spawn_egg',
            'magma_monsters:' + mobs + '_spawn_egg',
            'supplementaries:' + mobs + '_spawn_egg',
            'betterendforge:spawn_egg_' + mobs,
            'meetyourfight:' + mobs + '_spawn_egg',
            'eyesinthedarkness:' + mobs + '_spawn_egg',
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
            'alexsmobs:spawn_egg_' + mobs,
            'twilightforest:boss_spawner_' + mobs,
            'inventorypets:' + mobs + '_spawn',
            'marquot:' + mobs + '_spawn_egg',
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
});
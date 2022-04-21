onEvent('jei.hide.items', (event) => {

    materialsToUnify.forEach((materials) => {
        itemsToHide.push(
            'ars_nouveau:' + materials + '_ore',
            'atum:' + materials + '_ore',
            'appliedenergistics2:' + materials + '_ore',
            'alternacraft:' + materials + '_ore',
            'blue_skies:' + materials + '_ore',
            'bigreactors:' + materials + '_ore',
            'create:' + materials + '_ore',
            'druidcraft:' + materials + '_ore',
            'draconicevolution:' + materials + '_ore',
            'emendatusenigmatica:' + materials + '_ore',
            'eidolon:' + materials + '_ore',
            'forbidden_arcanus:' + materials + '_ore',
            'forbidden_arcanus:' + materials,
            'gobber2:' + materials + '_ore',
            'gobber2:' + materials + '_ore_end',
            'gobber2:' + materials + '_ore_deepslate',
            'gobber2:' + materials + '_lucky_block',
            'gobber2:' + materials + '_lucky_block_deepslate',
            'gobber2:' + materials + '_lucky_block_nehter',
            'immersiveengineering:' + 'ore_' + materials,
            'iceandfire:' + materials + '_ore',
            'immersiveengineering:' + 'deepslate_ore_' + materials,
            'mythicbotany:' + materials + '_ore',
            'minecraft:' + materials + '_ore',
            'mekanism:' + materials + '_ore',
            'mysticalagradditions:' + materials + '_ore',
            'mysticalagriculture:' + materials + '_ore',
            'occultism:' + materials + '_ore',
            'quark:' + materials + '_ore',
            'rftoolsbase:' + 'dimensionalshard_' + materials,
            'routerreborn:' + materials + '_ore',
            'thermal:' + materials + '_ore',
            'tconstruct:' + materials + '_ore',
            'undergarden:' + materials + '_ore'
    );
});

    dustsToUnify.forEach((dusts) => {
        itemsToHide.push(
            'appliedenergistics2:' + dusts + '_dust',
            'bigreactors:' + dusts + '_dust',
            'createaddition:' + dusts + '_grit',
            'immersiveengineering:' + 'dust_' + dusts,
            'mekanism:' + dusts + 'dust_',
            'occultism:' + dusts + '_dust',
            'thermal:' + dusts + '_dust'
    );
});

    nuggetsToUnify.forEach((nuggets) => {
        itemsToHide.push(
            'create:' + nuggets + '_nugget',
            'eidolon:' + nuggets + '_nugget',
            'iceandfire:' + nuggets + '_nugget',
            'immersiveengineering:' + 'nugget_' + nuggets,
            'occultism:' + nuggets + '_nugget',
            'mekanism:' + 'nugget_' + nuggets,
            'thermal:' + nuggets + '_nugget',
            'tconstruct:' + nuggets + '_nugget'
    );
});

    blocksToUnify.forEach((blocks) => {
        itemsToHide.push(
            'ars_nouveau:' + blocks,
            'create:' + blocks + '_block',
            'iceandfire:' + blocks + '_block',
            'immersiveengineering:' + 'storage_' + blocks,
            'immersiveengineering:' + blocks,
            'mekanism:' + 'block_' + blocks,
            'occultism:' + blocks + '_block',
            'thermal:' + blocks + '_block',
            'tconstruct:' + blocks + '_block'
    );
});

    siliconsToUnify.forEach((silicons) => {
        itemsToHide.push(
            'appliedenergistics2:' + silicons,
            'refinedstorage:' + silicons
    );
});

    gearsToUnify.forEach((gears) => {
        itemsToHide.push(
            'thermal:' + gears + '_gear',
            'titanium:' + gears + '_gear'
    );
});

    platesToUnify.forEach((plates) => {
        itemsToHide.push(
            'create:' + plates + '_sheet',
            'createaddition:' + plates + '_sheet',
            'immersiveengineering:' + 'plate_' + plates,
            'steampowered:' + plates + '_sheet',
            'thermal:' + plates + '_plate'
    );
});

    rodsToUnify.forEach((rods) => {
        itemsToHide.push(
            'buildersaddition:' + rods + '_rod',
            'createaddition:' + rods + '_rod',
            'immersiveengineering:' + 'stick_' + rods,
            'immersiveposts:' + 'stick_' + rods,
            'silentgear:' + 'stick_' + rods,
    );
});

    gemsToUnify.forEach((gems) => {
        itemsToHide.push(
            'appliedenergistics2:' + gems,
            'ars_nouveau:' + gems,
            'immersivepetroleum:' + gems,
            'immersiveengineering:' + 'coal_' + gems,
            'mekanism:' + gems,
            'thermal:' + gems + '_coke',
            'thermal:' + gems
    );
});

    ingotsToUnify.forEach((ingots) => {
        itemsToHide.push(
            'create:' + ingots + '_ingot',
            'iceandfire:' + ingots + '_ingot',
            'immersiveengineering:' + 'ingot_' + ingots,
            'mekanism:' + 'ingot_' + ingots,
            'occultism:' + ingots + '_ingot',
            'routerreborn:' + ingots + '_ingot',
            'thermal:' + ingots + '_ingot',
            'tconstruct:' + ingots + '_ingot',
    );
});

upgradesToUnify.forEach((upgrades) => {
        itemsToHide.push(
            'ironfurnaces:upgrade_' + upgrades
    );
});

leavesToUnify.forEach((leaves) => {
    itemsToHide.push(
        'twilightforest:' + leaves + '_leaves',
        'quark:' + leaves + '_leaves',
        'undergarden:' + leaves + '_leaves',
        'byg:' + leaves + '_leaves',
        'biomesoplenty:' + leaves + '_leaves',
        'sushigocrafting:' + leaves + '_logged',
        'occultism:' + leaves + '_natural',
        'occultism:' + leaves + '_leaves',
        'naturesaura:' + leaves + '_leaves',
        'forbidden_arcanus:' + leaves + '_leaves',
        'druidcraft:' + leaves + '_leaves',
        'mythicbotany:' + leaves + '_leaves',
        'upgrade_aquatic:' + leaves + '_leaves',
        'architects_palette:' + leaves + '_leaves',
        'sushigocrafting:' + leaves + '_leaves',
        'atum:' + leaves + '_leaves',
        'tconstruct:' + leaves + '_leaves',
        'environmental:' + leaves + '_leaves',
        'blue_skies:' + leaves + '_leaves',
        'mythicbotany:' + leaves + '_leaves',
        'minecraft:' + leaves + '_leaves'
    );
});

bucketsToUnify.forEach((buckets) => {
    itemsToHide.push(
        'hexerei:' + buckets + '_bucket',
        'minecraft:' + buckets + '_bucket',
        'alexsmobs:' + buckets + '_bucket',
        'aquaculture:' + buckets + '_bucket',
        'astralsorcery:' + buckets + '_bucket',
        'bloodmagic:' + buckets + '_bucket',
        'mekanism:' + buckets + '_bucket',
        'mekanismgenerators:' + buckets + '_bucket',
        'pneumaticcraft:' + buckets + '_bucket',
        'thermal:' + buckets + '_bucket',
        'quark:' + buckets + '_bucket',
        'undergarden:' + buckets + '_bucket',
        'woot:' + buckets + '_bucket',
        'tconstruct:' + buckets + '_bucket',
        'immersiveengineering:' + buckets + '_bucket',
        'immersivepetroleum:' + buckets + '_bucket',
        'industrialforegoing:' + buckets + '_bucket',
        'emendatusenigmatica:' + buckets + '_bucket',
        'create:' + buckets + '_bucket',
        'cyclic:' + buckets + '_bucket',
        'forbidden_arcanus:' + buckets + '_bucket',
        'envirocore:' + buckets + '_bucket',
        'materialsis:' + buckets + '_bucket',
        'blue_skies:' + buckets + '_bucket',
        'mysticalagradditions:' + buckets + '_bucket',
        'createaddition:' + buckets + '_bucket',
        'bigreactors:' + buckets + '_bucket',
        'environmental:' + buckets + '_bucket',
        'sushigocrafting:' + buckets + '_bucket',
        'upgrade_aquatic:' + buckets + '_bucket',
        'create:' + buckets + '_bucket',
        'betteranimalsplus:' + buckets + '_bucket'
    );
});


itemsToHide.forEach((disabledItem) => {
    if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
    }
});

    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
        event.hide('/minecraft:' + color + '\\w/');
    });
});
ServerEvents.tags('block', (e) => {

    const blocks = [
        /sophisticatedbackpacks:.*backpack/,
        /pneumaticcraft:.*pressure_tube/
    ];
    e.get('buildinggadgets:blacklist/building').add(blocks);
    e.get('buildinggadgets:blacklist/copy_paste').add(blocks);
    e.get('buildinggadgets:blacklist/exchanging').add(blocks);
});

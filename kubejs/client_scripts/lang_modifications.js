//priority: 800
const entries = {
    monumental: [
        {
            key: 'modernrecipes.recipes.mana_infusion.naturesaura.infused_iron_block',
            value: {
                normal: 'Block of Infused Iron'
            }
        }
    ],
    naturesaura: [
        {
            key: 'advancement.naturesaura.infused_materials.desc',
            value: {
                normal: 'Use the Natural Altar to create Infused Iron'
            }
        }
    ]
};

Object.keys(entries).forEach((mod) => {
    let lang_file = `kubejs/assets/${mod}/lang/en_us.json`;
    let lang_json = JsonIO.read(lang_file);

    entries[mod].forEach((entry) => {
        lang_json[entry.key] = entry.value[packMode];
    });

    JsonIO.write(lang_file, lang_json);
});

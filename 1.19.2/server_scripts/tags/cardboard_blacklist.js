ServerEvents.tags('block', e => {
    let cardboard_whitelist = [/(chest|drawer|cooler|crate|cabinet|barrel|basket)$/];
    var exceptions = [/sophisticated.*:/, /mekanism:/, /functionalstorage:/];

    e.get('mekanism:cardboard_blacklist').add(/.*/).remove(cardboard_whitelist).add(exceptions);
    e.get('mekanism:cardboard_whitelist').add(cardboard_whitelist).remove(exceptions);
});
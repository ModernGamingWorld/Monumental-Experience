onEvent('recipes', event => {
    let ingots = ['copper','bronze','tin', 'aluminum', 'lead', 'silver', 'nickel', 'platinum', 'uranium', 'iridium', 'zinc', 'osmium', 'sulfur', 'certus_quartz', 'charged_certus_quartz', 'fluix', 'fluorite', 'bitumen', 'cinnabar', 'apatite', 'potassium_nitrate', 'mana', 'bronze', 'brass', 'electrum', 'constantan', 'steel', 'invar', 'lumium', 'signalum', 'enderium', 'silicon', 'coal_coke', 'charcoal']
    let mod = 'emendatusenigmatica'
    for (let i of ingots) {
        event.replaceInput(`#forge:ingots/${i}`, `${mod}:${i}_ingot`)
        event.replaceInput(`#forge:ore/${i}`, `${mod}:${i}_ore`)
        event.replaceInput(`#forge:nuggets/${i}`, `${mod}:${i}_nugget`)
        event.replaceInput(`#forge:storage_blocks/${i}`, `${mod}:${i}_block`)
        event.replaceInput(`#forge:dusts/${i}`, `${mod}:${i}_dust`)
        event.replaceInput(`#forge:rods/${i}`, `${mod}:${i}_rod`)
        event.replaceInput(`#forge:plates/${i}`, `${mod}:${i}_plate`)
        event.replaceInput(`#forge:gears/${i}`, `${mod}:${i}_gear`)
        event.replaceInput(`#forge:dusts/wood${i}`, `${mod}:${i}_dust`)
        event.replaceInput(`#forge:chunks/${i}`, `${mod}:${i}_chunk`)
    }
})
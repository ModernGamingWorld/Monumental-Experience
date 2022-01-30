onEvent('recipes', event => {
    let ingots = ['copper','bronze','tin', 'aluminum', 'lead', 'silver', 'nickel', 'platinum', 'uranium', 'iridium', 'zinc', 'osmium', 'sulfur', 'certus_quartz', 'charged_certus_quartz', 'fluix', 'fluorite', 'bitumen', 'cinnabar', 'apatite', 'potassium_nitrate', 'mana', 'bronze', 'brass', 'electrum', 'constantan', 'steel', 'invar', 'lumium', 'signalum', 'enderium', 'silicon', 'coal_coke', 'charcoal', 'wood', 'ender']
    let mod = 'emendatusenigmatica'
    for (let i of ingots) {
        event.replaceOutput(`#forge:ingots/${i}`, `${mod}:${i}_ingot`)
        event.replaceOutput(`#forge:ores/${i}`, `${mod}:${i}_ore`)
        event.replaceOutput(`#forge:nuggets/${i}`, `${mod}:${i}_nugget`)
        event.replaceOutput(`#forge:storage_blocks/${i}`, `${mod}:${i}_block`)
        event.replaceOutput(`#forge:rods/${i}`, `${mod}:${i}_rod`)
        event.replaceOutput(`#forge:dusts/${i}`, `${mod}:${i}_dust`)
        event.replaceOutput(`#forge:dusts/wood${i}`, `${mod}:${i}_dust`)
        event.replaceOutput(`#forge:gears/${i}`, `${mod}:${i}_gear`)
        event.replaceOutput(`#forge:plates/${i}`, `${mod}:${i}_plate`)
        event.replaceOutput(`#forge:chunks/${i}`, `${mod}:${i}_chunk`)
        event.replaceOutput(`#forge:gems/${i}`, `${mod}:${i}_gem`)
    }
})
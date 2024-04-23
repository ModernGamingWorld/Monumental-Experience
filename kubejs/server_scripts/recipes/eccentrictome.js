//Priority: 100

let EccentricTome = Item.of('eccentrictome:tome',
  {
    "eccentrictome:mods": {
      advancedperipherals: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "advancedperipherals:manual" } } },
      ae2: { 0: { Count: 1, id: "ae2:guide" } },
      apotheosis: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "apotheosis:apoth_chronicle" } } },
      ars_nouveau: { 0: { Count: 1, id: "ars_nouveau:worn_notebook" } },
      botania: { 0: { Count: 1, id: "botania:lexicon" } },
      caupona: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "caupona:book" } } },
      croptopia: { 0: { Count: 1, id: "croptopia:guide" } },
      cyclic: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "cyclic:cyclic_guide_book" } } },
      enigmaticlegacy: { 0: { Count: 1, id: "enigmaticlegacy:the_acknowledgment" } },
      engineersdecor: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "engineersdecor:engineersdecor_manual" } } },
      extendedcrafting: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "extendedcrafting:guide" } } },
      essentials: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "essentials:manual" } } },
      ftbquests: { 0: { Count: 1, id: "ftbquests:book" } },
      immersiveengineering: { 0: { Count: 1, id: "immersiveengineering:manual" } },
      industrialforegoing: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "industrialforegoing:industrial_foregoing" } } },
      littlelogistics: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "littlelogistics:guide" } } },
      modonomicon: { 0: { Count: 1, id: "modonomicon:modonomicon", tag: { "modonomicon:book_id": "modonomicon:demo" } } },
      mysticalagriculture: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "mysticalagriculture:guide" } } },
      modularrouters: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "modularrouters:book" } } },
      naturesaura: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "naturesaura:book" } } },
      occultism: { 0: { Count: 1, id: "occultism:dictionary_of_spirits", tag: { "modonomicon:book_id": "occultism:dictionary_of_spirits" } } },
      pneumaticcraft: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "pneumaticcraft:book" } } },
      productivebees: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "productivebees:guide" } } },
      rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
      sebastrnlib: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "sebastrnlib:sebastrn_mods_guide_book" } } },
      securitycraft: { 0: { Count: 1, id: "securitycraft:sc_manual" } },
      solcarrot: { 0: { Count: 1, id: "solcarrot:food_book" } },
      sushigocrafting: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "sushigocrafting:sushigocrafting" } } },
      thermal: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "thermal:guidebook" } } }
    },
    "eccentrictome:version": 1
  }
)

ServerEvents.recipes(e => {
  
  e.shapeless(EccentricTome, 'minecraft:book').id('kubejs:full_tome')
  
})
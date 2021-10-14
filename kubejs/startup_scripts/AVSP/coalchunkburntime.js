//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//EMENDATUSENIGMATICA COAL CHUNK FIX.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent("item.modification", event => {
  //This will make coalchunk burnable, but not as burnable as coal(coal is 1600 ticks, coal chunk is 1066 ticks (2/3))
  event.modify("emendatusenigmatica:coal_chunk", item => {
    item.setBurnTime(1066)
  })

  //This will make crushed coal burnable.
  event.modify("emendatusenigmatica:coal_crushed", item => {
    item.setBurnTime(1066)
  })

  //This will make coal dust burnable.
  event.modify("emendatusenigmatica:coal_dust", item => {
    item.setBurnTime(1066)
  })
//
//fin
//
})
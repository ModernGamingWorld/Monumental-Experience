//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//EXTRA CELLS RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	event.remove({id: 'extradisks:raw_withering_processor'})
	event.shaped('extradisks:raw_withering_processor', [
		'PN ',
		'SR ',
		'   '
	], {
		P: 'refinedstorage:processor_binding',
		N: '#forge:nether_stars',
		S: '#forge:silicon',
		R: '#forge:dusts/redstone'
	}).id('AVSP:extradisks/shaped/raw_withering_processor')
//
//fin
//
})
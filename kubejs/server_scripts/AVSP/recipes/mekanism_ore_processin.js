//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MEKANISM ORE PROCESSING RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
//MASSIVE SHOUTOUT TO CALLMEJAY758 FOR HELPING ME FIGURE THIS OUT.
//Also huge shoutout to the guys behind mekanism.
//https://github.com/mekanism/Mekanism/blob/v10.1/src/datagen/generated/mekanism/data/mekanism/recipes/processing
//
onEvent('recipes', event => {

//
//I have never used mekanism ore processing before, so please let me know if there is any bugs.
//

//
//SUPPORT FOR CURRENTLY UNSUPPORTED MATERIALS
//

//COAL
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/coal'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_coal',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_coal'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_coal',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_coal'
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/coal'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/coal'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/coal'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/coal'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/coal'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/coal'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:coal_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/coal'
  			}
  		},
  		output: {
  			item: 'minecraft:coal',
  			count: 2
  		}
  	})

//DIAMOND
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/diamond'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_diamond',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_diamond'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_diamond',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_diamond'
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/diamond'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/diamond'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/diamond'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/diamond'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/diamond'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/diamond'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:diamond_dust'
  		}
  	})

//EMERALD
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/emerald'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_emerald',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_emerald'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_emerald',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_emerald'
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/emerald'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/emerald'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/emerald'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/emerald'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/emerald'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/emerald'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:emerald_dust'
  		}
  	})

//lAPIS
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/lapis'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_lapis',
  			amount: 7000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_lapis'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_lapis',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_lapis'
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/lapis'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/lapis'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_shard',
  			count: 28
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/lapis'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/lapis'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_clump',
  			count: 21
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/lapis'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/lapis'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:lapis_dust'
  		}
  	})

//REDSTONE
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/redstone'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_redstone',
  			amount: 6000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_redstone'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_redstone',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_redstone'
  		},
  		output: {
  			item: 'emendatusenigmatica:redstone_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/redstone'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:redstone_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/redstone'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:redstone_shard',
  			count: 24
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/redstone'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:redstone_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/redstone'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:redstone_clump',
  			count: 18
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/redstone'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:redstone_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/redstone'
  			}
  		},
  		output: {
  			item: 'minecraft:redstone'
  		}
  	})

//ALUMINUM
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/aluminum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_aluminum',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_aluminum'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_aluminum',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_aluminum'
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/aluminum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/aluminum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/aluminum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/aluminum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/aluminum'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/aluminum'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/aluminum'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:aluminum_dust',
  			count: 2
  		}
  	})

//SILVER
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/silver'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_silver',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_silver'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_silver',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_silver'
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/silver'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/silver'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/silver'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/silver'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/silver'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/silver'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/silver'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:silver_dust',
  			count: 2
  		}
  	})

//NICKEL
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/nickel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_nickel',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_nickel'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_nickel',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_nickel'
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/nickel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/nickel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/nickel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/nickel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/nickel'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/nickel'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/nickel'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:nickel_dust',
  			count: 2
  		}
  	})

//ZINC
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/zinc'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_zinc',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_zinc'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_zinc',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_zinc'
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/zinc'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/zinc'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/zinc'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/zinc'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/zinc'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/zinc'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/zinc'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:zinc_dust',
  			count: 2
  		}
  	})

//COBALT
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cobalt'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_cobalt',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_cobalt'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_cobalt',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_cobalt'
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/cobalt'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cobalt'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/cobalt'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cobalt'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/cobalt'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/cobalt'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/cobalt'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cobalt_dust',
  			count: 2
  		}
  	})

//FLUORITE
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/fluorite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_fluorite',
  			amount: 6000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_fluorite'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_fluorite',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_fluorite'
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/fluorite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/fluorite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_shard',
  			count: 24
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/fluorite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/fluorite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_clump',
  			count: 18
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/fluorite'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/fluorite'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/fluorite'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:fluorite_gem',
  			count: 12
  		}
  	})

//BITUMEN (N/A)

//CINNABAR
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cinnabar'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_cinnabar',
  			amount: 2000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_cinnabar'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_cinnabar',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_cinnabar'
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/cinnabar'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cinnabar'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_shard',
  			count: 8
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/cinnabar'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cinnabar'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_clump',
  			count: 6
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/cinnabar'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/cinnabar'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER (DUST TO GEM)
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			item: 'emendatusenigmatica:cinnabar_dust'
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_gem'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/cinnabar'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cinnabar_gem',
  			count: 2
  		}
  	})

//APATITE
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/apatite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_apatite',
  			amount: 10000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_apatite'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_apatite',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_apatite'
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/apatite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/apatite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_shard',
  			count: 40
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/apatite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/apatite'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_clump',
  			count: 30
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/apatite'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/apatite'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER (DUST TO GEM)
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			item: 'emendatusenigmatica:apatite_dust'
  			
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_gem'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/apatite'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:apatite_gem',
  			count: 2
  		}
  	})

//SULFUR
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/sulfur'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_sulfur',
  			amount: 4000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_sulfur'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_sulfur',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_sulfur'
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/sulfur'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/sulfur'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_shard',
  			count: 16
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/sulfur'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/sulfur'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_clump',
  			count: 12
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/sulfur'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/sulfur'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_dust'
  		}
  	})
  	//SMELTING
  	event.custom({
  		type: 'minecraft:smelting',
  		result: 'emendatusenigmatica:sulfur_gem',
  		ingredient: {
  			tag: 'forge:dusts/sulfur'
  		},
  		cookingtime: 100,
  		experience: 0.15
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/sulfur'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:sulfur_gem',
  			count: 8
  		}
  	})

//NITER
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/niter'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_potassium_nitrate',
  			amount: 6000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_potassium_nitrate'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_potassium_nitrate',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_potassium_nitrate'
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/potassium_nitrate'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/potassium_nitrate'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_shard',
  			count: 24
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/potassium_nitrate'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/niter'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_clump',
  			count: 18
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/potassium_nitrate'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/potassium_nitrate'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_dust'
  		}
  	})
  	//DUST TO GEM
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			item: 'emendatusenigmatica:potassium_nitrate_dust'
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_gem'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/niter'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:potassium_nitrate_gem',
  			count: 12
  		}
  	})

//DIMENSIONAL SHARD
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/dimensional'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_dimensional',
  			amount: 1000,
  			chemicalType: 'slurry'
  		}
  	})
  	//CHEMICAL WASHER
  	event.custom({
  		type: 'mekanism:washing',
  		fluidInput: {
  			amount: 5,
  			tag: 'minecraft:water'
  		},
  		slurryInput: {
  			amount: 1,
  			slurry: 'emendatusenigmatica:dirty_dimensional'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_dimensional',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_dimensional'
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/dimensional'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/dimensional'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/dimensional'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/dimensional'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/dimensional'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/dimensional'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_dust'
  		}
  	})
  	//DUST TO GEM
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			item: 'emendatusenigmatica:dimensional_dust'
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_gem'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/dimensional'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:dimensional_gem',
  			count: 2
  		}
  	})
//
//fin
//
})
onEvent('recipes', (event) => {
    //Ae2
    event.recipes.appliedenergistics2.inscriber({
        "type": "appliedenergistics2:inscriber",
        "mode": "press",
        "result": {
            "item": "appliedenergistics2:printed_engineering_processor"
        },
        "ingredients": {
            "top": {
                "item": "appliedenergistics2:engineering_processor_press"
            },
            "middle": {
                "tag": "forge:plates/enderium"
            },
            "bottom": {
                "item": "appliedenergistics2:printed_silicon"
            }
        }
    });
    event.recipes.appliedenergistics2.inscriber({
        "type": "appliedenergistics2:inscriber",
        "mode": "press",
        "result": {
            "item": "appliedenergistics2:printed_logic_processor"
        },
        "ingredients": {
            "top": {
                "item": "appliedenergistics2:logic_processor_press"
            },
            "middle": {
                "tag": "forge:plates/electrum"
            },
            "bottom": {
                "item": "appliedenergistics2:printed_silicon"
            }
        }
    });
    event.recipes.appliedenergistics2.inscriber({
        "type": "appliedenergistics2:inscriber",
        "mode": "press",
        "result": {
            "item": "appliedenergistics2:printed_calculation_processor"
        },
        "ingredients": {
            "top": {
                "item": "appliedenergistics2:calculation_processor_press"
            },
            "middle": {
                "tag": "appliedenergistics2:crystals/certus"
            },
            "bottom": {
                "item": "appliedenergistics2:printed_silicon"
            }
        }
    });
//Extra Disc
    event.recipes.appliedenergistics2.inscriber({
        "type": "appliedenergistics2:inscriber",
        "mode": "press",
        "result": {
            "item": "extradisks:withering_processor"
        },
        "ingredients": {
            "top": {
                "item": "appliedenergistics2:printed_silicon"
            },
            "middle": {
                "tag": "forge:dusts/redstone"
            },
            "bottom": {
                "item": "extradisks:raw_withering_processor"
            }
        }
    });
//Refined Storage
    event.recipes.appliedenergistics2.inscriber({
        "type": "appliedenergistics2:inscriber",
        "mode": "press",
        "result": {
            "item": "refinedstorage:advanced_processor"
        },
        "ingredients": {
            "top": {
                "tag": "forge:gems/silicon"
            },
            "middle": {
                "tag": "forge:dusts/redstone"
            },
            "bottom": {
                "item": "refinedstorage:raw_advanced_processor"
            }
        }
    });
    event.recipes.appliedenergistics2.inscriber({
        "type": "appliedenergistics2:inscriber",
        "mode": "press",
        "result": {
            "item": "refinedstorage:basic_processor"
        },
        "ingredients": {
            "top": {
                "tag": "forge:gems/silicon"
            },
            "middle": {
                "tag": "forge:dusts/redstone"
            },
            "bottom": {
                "item": "refinedstorage:raw_basic_processor"
            }
        }
    });
});
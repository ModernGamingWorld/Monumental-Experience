onEvent('recipes', (event) => {
    /*event.recipes.ae2.inscriber({
        "type": "ae2:inscriber",
        "mode": "press",
        "result": {
            "item": "ae2:printed_engineering_processor"
        },
        "ingredients": {
            "top": {
                "item": "ae2:engineering_processor_press"
            },
            "middle": {
                "tag": "forge:plates/enderium"
            }
        }
    });
    event.recipes.ae2.inscriber({
        "type": "ae2:inscriber",
        "mode": "press",
        "result": {
            "item": "ae2:printed_logic_processor"
        },
        "ingredients": {
            "top": {
                "item": "ae2:logic_processor_press"
            },
            "middle": {
                "tag": "forge:plates/electrum"
            }
        }
    });*/
    event.recipes.ae2.inscriber({
        "type": "ae2:inscriber",
        "mode": "press",
        "result": {
            "item": "refinedstorage:advanced_processor"
        },
        "ingredients": {
            "top": {
                "tag": "forge:silicon"
            },
            "middle": {
                "tag": "forge:dusts/redstone"
            },
            "bottom": {
                "item": "refinedstorage:raw_advanced_processor"
            }
        }
    });
    event.recipes.ae2.inscriber({
        "type": "ae2:inscriber",
        "mode": "press",
        "result": {
            "item": "extradisks:withering_processor"
        },
        "ingredients": {
            "top": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "forge:dusts/redstone"
            },
            "bottom": {
                "item": "extradisks:raw_withering_processor"
            }
        }
    });
    event.recipes.ae2.inscriber({
        "type": "ae2:inscriber",
        "mode": "press",
        "result": {
            "item": "refinedstorage:basic_processor"
        },
        "ingredients": {
            "top": {
                "tag": "forge:silicon"
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
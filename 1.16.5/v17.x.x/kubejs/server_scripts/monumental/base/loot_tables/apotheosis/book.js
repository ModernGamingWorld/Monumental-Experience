onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        "pools": [{}]
    }
    event.addJson(`apotheosis:loot_tables/book.json`, loot_table);
});
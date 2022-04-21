onEvent('tags.items', (event) => {
    var items = ['immersiveengineering:hoe_steel'];
    var exceptions = ['doom:argent_hoe', 'gobber2:gobber2_hoe_end', 'gobber2:gobber2_hoe_nether', 'gobber2:gobber2_hoe'];

    var tags = ['forge:tools', 'forge:tools/hoes'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/_hoe/).add(/_aiot/).remove(exceptions);
    });
});

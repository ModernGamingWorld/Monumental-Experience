onEvent('tags.items', (event) => {
    var exceptions = ['immersiveengineering:gunpart_hammer','gobber2:gobber2_hammer', 'gobber2:gobber2_hammer_nether', 'gobber2:gobber2_hammer_end', 'industrialforegoing:infinity_hammer', 'immersiveengineering:bannerpattern_hammer'];

    var tags = ['forge:tools', 'forge:tools/hammer'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/_hammer/)
            .remove(exceptions);
    });
});

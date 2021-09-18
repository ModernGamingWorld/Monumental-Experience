onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        event.add(`chisel:${stoneType.name}`, [`#monumental:stonecuttables/${stoneType.name}`]);
    });
});

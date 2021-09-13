onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        var tag = `Monumental:stonecuttables/${stoneType.name}`;
        event.add('Monumental:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });
});

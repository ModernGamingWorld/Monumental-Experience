onEvent('tags.items', (event) => {
    stonecuttables.forEach((stoneType) => {
        var tag = `monumental:stonecuttables/${stoneType.name}`;
        event.add('monumental:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });
});

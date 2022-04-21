onEvent('tags.items', (event) => {
    colors.forEach((color) => {
        event.get('forge:candles').add('quark:' + color + '_candle');
    });
    candles.forEach((candle) => {
        event.get('forge:candles').add(candle);
    });
});

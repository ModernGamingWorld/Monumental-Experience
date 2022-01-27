onEvent('tags.items', (event) => {
    event.add('forge:bookshelves', [/betterendforge:\w+_bookshelf/, /upgrade_aquatic:\w+_bookshelf/]);
});

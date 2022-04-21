onEvent('tags.items', (event) => {
    var items = [];
    var exceptions = [
    'supplementaries:sign_post_blood',
    'supplementaries:hanging_sign_blood',
    'tconstruct:stripped_bloodshroom_log',
    'tconstruct:stripped_bloodshroom_wood'
    ];

    var tags = ['forge:blood'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/_blood/).add(/_blood/).remove(exceptions);
    });
});

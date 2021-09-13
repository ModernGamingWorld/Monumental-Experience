//priority: 1005

function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}
function entryIsBlacklisted(material, type) {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];
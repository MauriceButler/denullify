function denullify(items){
    if(typeof items !== 'object'){
        return;
    }

    for(var key in items){
        var item = items[key];

        if(item == null){
            delete items[key];
        } else {
            denullify(item);
        }
    }

    return items;
}

module.exports = denullify;
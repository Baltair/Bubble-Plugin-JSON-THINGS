function(instance, properties, context) {

    var result = {};
    properties.texts.forEach(addToResult);
    properties.numbers.forEach(addToResult);
    properties.booleans.forEach(addToResult);
    properties.dates.forEach(addToResult);
    properties.jsons.forEach(function(jsonobject) {addToResult(jsonobject,true)});

    instance.publishState('new_JSON',JSON.stringify(result));
    
    function addToResult(pair,isjson){
        if(isjson===true) result[pair.key] = JSON.parse(pair.value); else result[pair.key] = pair.value;
    }
    
}
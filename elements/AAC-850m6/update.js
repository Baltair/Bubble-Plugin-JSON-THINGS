function(instance, properties, context) {

   	if (properties.json_value == "" || properties.json_value == undefined) return;

	let obj = JSON.parse(properties.json_value) || "";
    var thing1 = obj[properties.thing1_key];
    var text1 = obj[properties.text1_key];
    var number1 = obj[properties.number1_key];
    var boolean1 = obj[properties.boolean1_key];
    var date1 = obj[properties.date1_key];
    
    if(thing1){
    	instance.publishState("thing1_value",thing1);
    }else{instance.publishState("thing1_value","");}
    if(text1){
        instance.publishState("text1_value",text1);
    }else{instance.publishState("text1_value","");}
    if(number1){
        instance.publishState("number1_value",number1);
    }else{instance.publishState("number1_value","");}
    if(boolean1){
        instance.publishState("boolean1_value",boolean1);
    }else{instance.publishState("boolean1_value","");}
    if(date1){
        instance.publishState("date1_value",date1);
    }else{instance.publishState("date1_value","");}


}
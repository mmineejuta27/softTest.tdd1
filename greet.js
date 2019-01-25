function greet(name) {

    if(name == null) {
        return "Hello, my friend."
    }

    if(Array.isArray(name)){
        if(name.length > 2){
            last = name.pop()
            return "Hello, "+name.join(", ")+", and "+last+"."
        }else{
            return "Hello "+ name.join(" and ")
        }
        
    
    }

    else if(name == name.toUpperCase()){
        return "HELLO, "+ name.toUpperCase()
    }

    
    return `Hello, ${name}.` ;
}

module.exports = greet;
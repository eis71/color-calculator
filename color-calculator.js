const prompt = require(`prompt-sync`)({sigint: true});

let userInterface = String(prompt("Welcome to Color Calculator. Please input `combine` or `deconstruct`: ")).toLowerCase();

if (userInterface === "combine"){
    let color1 = String(prompt("Please input the first color: ")).toLowerCase();
    let color2 = String(prompt("Please input the second color: ")).toLowerCase();
    let output = String();
    let fubar = false;
    if ((color1 === "red" || color1 === "blue") && (color2 === "blue" || color2 === "red")){
        output = "Purple";
    } else if ((color1 === "yellow" || color1 === "red") && (color2 === "red" || color2 === "yellow")){
        output = "Orange";
    } else if ((color1 === "yellow" || color1 === "blue") && (color2 === "blue" || color2 === "yellow")){
        output = "Green";
    } else {  
        fubar = true;
        console.log("ERROR! INVALID COLOR COMBINATION!");
    }
    
    if (fubar === false){
        console.log(`This combination creates ${output}.`);
    }
}

else if (userInterface === "deconstruct"){
    let color3 = String(prompt("Please input the color you want to deconstruct: ")).toLowerCase();
    let output = String();
    let fubar = false;
    if (color3 === "green"){
        output = "Blue and Yellow";
    } else if (color3 === "purple"){
        output = "Red and Blue";
    } else if (color3 === "orange"){
        output = "Red and Yellow";
    } else {
        fubar = true;
        console.log("ERROR! INVALID COLOR CHOICE!");
    } 
     
    if (fubar === false){    
     console.log(`This color breaks down into ${output}.`);
    }
}

else {
    console.log("ERROR! INVALID INPUT!");
}
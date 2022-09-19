const prompt = require(`prompt-sync`)({sigint: true});

let userInterface = String(prompt("Welcome to Color Calculator. Please input `combine` or `deconstruct`: ")).toLowerCase();

if (userInterface === "combine"){
    let color1 = String(prompt("Please input the first color: ")).toLowerCase();
    let color2 = String(prompt("Please input the second color: ")).toLowerCase();
    if (color1 === "red" && color2 === "blue"){
        console.log("This combination creates Purple.");
    } else if ( color1 === "blue" && color2 === "red"){
        console.log("This combination creates Purple.");
    } else if ( color1 === "yellow" && color2 === "red"){
        console.log("This combination creates Orange.");
    } else if ( color1 === "red" && color2 === "yellow"){
        console.log("This combination creates Orange.");
    } else if ( color1 === "blue" && color2 === "yellow"){
        console.log("This combination creates Green.");
    } else if ( color1 === "yellow" && color2 === "blue"){
        console.log("This combination creates Green.");
    } else { 
        console.log("ERROR! INVALID COLOR COMBINATION!")
    }
}

if (userInterface === "deconstruct"){
    let color3 = String(prompt("Please input the color you want to deconstruct: ")).toLowerCase();
    if (color3 === "green"){
        console.log("The color green breaks down into Blue and Yellow.");
    } else if (color3 === "purple"){
        console.log("The color Purple breaks down into Blue and Red.");
    } else if (color3 === "orange"){
        console.log("The color Orange breaks down into Red and Yellow.");
    } else {
        console.log("ERROR! INVALID COLOR CHOICE!");
    }
}

/*
T-Shirt: Write a function called make_shirt() that 
accepts a size and the text of a message that 
should be printed on the shirt. The function 
should print a sentence summarizing the size 
of the shirt and the message 
printed on it. Call the function.
*/

const make_shirt = function(size: string, message: string){
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt("Medium", "God knows best");
make_shirt("Small", "God knows best");
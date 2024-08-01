/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

const make_shirt = function(size: string = "large", message: string = "I love typescript"){
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt()
make_shirt("Medium");
make_shirt("Small", "God knows best");
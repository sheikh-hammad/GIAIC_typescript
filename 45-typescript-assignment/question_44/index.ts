/*
Sandwiches: Write a function that accepts a array of items 
a person wants on a sandwich. The function 
should have one parameter that collects 
as many items as the function call provides, 
and it should print a summary of the sandwich 
that is being ordered. Call the function three 
times, using a different number of arguments each time.
*/

function make_samdwich(...items: string[]){
    console.log(`Making a sandwich with ${items}`);
}
make_samdwich('chicken', 'ketecup', 'podina')
make_samdwich('chicken', 'ketecup', 'podina', 'onion')
/*
Magicians: Make a array of magician’s names. Pass the 
array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

const magicians: string[] = [
    "Shffan", "Naqash", "Areeb"
];

const show_magicians = function(){
    for(const i of magicians){
        console.log(i)
    }
}
show_magicians();


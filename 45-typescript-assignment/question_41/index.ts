/*
Magicians: Make a array of magician’s names. Pass the 
array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

// const magicians: string[] = [
//     "Shffan", "Naqash", "Areeb"
// ];

// const show_magicians = function(){
//     for(const i of magicians){
//         console.log(i)
//     }
// }
// show_magicians();

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
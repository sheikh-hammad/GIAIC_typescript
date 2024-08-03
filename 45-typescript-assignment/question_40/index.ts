let make_album = (artist: string, title: string, tracks ? : number) => {
    const album: {
        artist: string,
        title: string,
        tracks ? : number
    } = {
        artist: artist,
        title: title,

    }

    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album
}

console.log(make_album('Artist 1', 'First album', 43));
console.log(make_album('Artist 2', 'Second album'));
console.log(make_album('Artist 3', 'Third album'));
function make_album(artist_name, album_title, tracks = "unknown") {
    // first we create a object
    let album = {
        artist: artist_name,
        title: album_title,
        tracks: tracks,
    };
    // now we return it because that is the requirement
    return album;
}

let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album3 = make_album("Michael Jackson", "Thriller");
console.log(album1);
console.log(album2);
console.log(album3);
let album4 = make_album("Michael Jackson", "Bad", 9);
console.log(album4);
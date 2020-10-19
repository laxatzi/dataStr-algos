const favSong = {
    'Title':'Mia kore etragoydise',
    'Translated Title': 'A girs\' song',
//Traditional greek songs from Near East (modern day Turkey) including but not limited to Ionia
    'Album':'Songs of the Ionic Land',
    'Country': 'Greece',
    'Genre': 'Folk',
    'Released': 1996,
    'Instruments of the Orchestra': ["oud", "violin", "canon", "nef"],
    'Orchestra':{
        'oud':'Christos Tsiamoulis',
        'nef':'Christos Lambrakis',
        'violin':'Kostantinos Gouventas',
        'canon':'Panos Dimitrakopoulos',
    },
    'vocals': 'Christos Tsiamoulis',

}

console.log(favSong.Title);
console.log(favSong.Album);
console.log(favSong["Instruments of the Orchestra"]);
console.log(favSong.Orchestra.oud);
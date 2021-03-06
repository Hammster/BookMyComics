function sendUpdatesForMangaReader() {
    var path = window.location.pathname;
    var parts = path.split("/").filter(function(s) { return s.length !== 0});
    var not_mangas = ["popular", "search", "alphabetical", "latest", "random"];

    if (parts.length < 1) {
        return;
    }
    for (var i = 0; i < not_mangas.length; ++i) {
        if (parts[0] === not_mangas[i]) {
            return;
        }
    }
    var manga = parts[0];
    var chapter = null;
    var page = null;
    if (parts.length > 1) {
        chapter = parts[1];
        if (parts.length > 2) {
            page = parts[2];
        } else {
            page = 1;
        }
    }
    console.log("current manga: " + manga);
    if (chapter !== null) {
        console.log("current chapter: " + chapter);
        if (page !== null) {
            console.log("current page: " + page);
        }
    }
}

sendUpdatesForMangaReader();

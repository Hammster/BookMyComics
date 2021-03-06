function sendUpdatesForMangaHere() {
    var path = window.location.pathname;
    var parts = path.split("/").filter(function(s) { return s.length !== 0});

    var manga = null;
    var chapter = null;
    var page = null;
    if (parts.length === 2 && parts[0] === 'manga') {
        manga = parts[1];
    } else if (parts.length === 1) {
        var urlParts = parts[0].split("-chapter-");
        if (urlParts.length < 2) {
            return;
        } else if (urlParts.length > 1) {
            manga = urlParts[0];
            chapter = urlParts[1];
            page = 1;
        }
        if (window.location.search.length > 0) {
            var parts = window.location.search.split("page=");
            if (parts.length > 1) {
                page = parseInt(parts[1].split('&')[0], 10);
            }
        }
    } else {
        return;
    }
    console.log("current manga: " + manga);
    if (chapter !== null) {
        console.log("current chapter: " + chapter);
        if (page !== null) {
            console.log("current page: " + page);
        }
    }
}

sendUpdatesForMangaHere();

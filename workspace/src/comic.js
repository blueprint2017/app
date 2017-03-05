function randComic() {
    var comicNumber = Math.round((Math.random()*1655)+150);
    var linkToComic = "https://xkcd.com/" + comicNumber + "/";
    return linkToComic;
}

function updateFrame(frameElement, newUrl) {
    frameElement.src = newUrl;
}

function main() {
    var comicFrame = document.getElementById("frame");
    var button = document.getElementById("button");
    updateFrame(comicFrame, randComic());
    
    button.onclick = function() {
        updateFrame(comicFrame, randComic());
//         myIframe.onload = function () {
//     myIframe.contentWindow.scrollTo(0,50);
// }
    }
}

// myIframe.onload = function () {
//     // myIframe.contentWindow.scrollTo(0,50);
// }

window.onload = main;

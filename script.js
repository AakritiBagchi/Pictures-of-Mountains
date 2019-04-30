$(".everest").click(function() {
    showPicture("https://user-images.githubusercontent.com/14214/42292528-246b57fe-7fa1-11e8-83fb-3a0daa76d08e.png");
    highlightMountains();
});

$(".k2").click(function() {
    showPicture("https://user-images.githubusercontent.com/14214/42292614-ba367638-7fa1-11e8-8e94-97bc8b566232.png");
    highlightMountains();
});

$(".kangchenjunga").click(function() {
    showPicture("https://user-images.githubusercontent.com/14214/42292634-e0fedbac-7fa1-11e8-9d56-6d12dcd7ab3c.png");
    highlightMountains();
});

$(".Lhotse").click(function() {
    showPicture("https://www.adventureconsultants.com/assets/Uploads/Himalaya/Nepal-Himalaya/Lhotse/Windy-EBC-SK.jpeg");
    highlightMountains();
});

function showPicture(picture) {
    $(".mountain-picture").attr("src", picture);
}

function highlightMountains() {
    $(".picture-color").css("background-color", "lightblue");
}
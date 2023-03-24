function random_lofi() {
    var lofiFrame = document.getElementById("lofi");
    var randomValue = Math.floor(Math.random() * 199);
    var src = lofiFrame.getAttribute("src");
    src = src.replace("ran", randomValue);
    lofiFrame.setAttribute("src", src);
}
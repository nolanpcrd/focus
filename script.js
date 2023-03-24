function init() {
    selectButton("dark");
}

function color(){
    let cookies = updateDict()
    console.log(cookies.theme)
    console.log(cookies.other)
    document.body.style.background = "url(../../img/" + cookies.theme + "_" + cookies.other + ".png) no-repeat center center fixed";
}

function random_lofi() {
        var lofiFrame = document.getElementById("lofi");
        var randomValue = Math.floor(Math.random() * 199);
        var src = lofiFrame.getAttribute("src");
        src = src.replace("ran", randomValue);
        lofiFrame.setAttribute("src", src);
}

function selectButton(buttonId) {
    let color, url, img;
    if (buttonId === "dark") {
        document.cookies="theme=bl";
        document.cookies="other=wh";
        img = "bl_wh"
        url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1575805420&color=%23cccccc&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false&download=false&start_track=ran";
        color = ["#cccccc", "#000000"];
        document.getElementById("light").style.borderStyle = "dashed";
        document.getElementById("dark").style.borderStyle = "solid";
        document.getElementById("hide").src = "../../img/hide_bl.png";
    }
    else {
        document.cookies="theme=wh";
        document.cookies="other=bl";
        img = "wh_bl"
        url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1575800296&color=%23333333&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false&download=false&start_track=ran";
        color = ["#333333", "#ffffff"];
        document.getElementById("dark").style.borderStyle = "dashed";
        document.getElementById("light").style.borderStyle = "solid";
        document.getElementById("hide").src = "../../img/hide_wh.png";
    }
    document.body.style.background = "url(../../img/IMG.png) no-repeat center center fixed".replace("IMG", img);
    document.body.style.backgroundSize = "cover";
    document.getElementById("p1").style.color = color[0];
    document.getElementById("musique").style.color = color[0];
    document.getElementById("btn").style.backgroundColor = color[0];
    document.getElementById("btn").style.color = color[1];
    document.getElementById("robot").src = "../../img/robot_IMG.png".replace("IMG", img);
    document.getElementById("lofi").src = url;
    random_lofi();
}

function updateDict(){
    cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let current = cookies[i].split("=");
        cookies[current[0]] = current[1];
    }
    return cookies
}
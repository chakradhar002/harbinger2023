function isPortrait() {
    return window.innerHeight > window.innerWidth;
}


function isLandscape() {
    return (window.orientation === 90 || window.orientation === -90);
}

function check(){
if (isPortrait()) {
    console.log("This page is best viewed in portrait mode");
}
if(isLandscape()){
    console.log("This page is in landscape mode")
}
}

check()
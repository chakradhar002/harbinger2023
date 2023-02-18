function check_landscape() {
    
    console.log("Landscape width  => " + screen.width);
    console.log("Landscape height => " + screen.height);

    if (screen.width > screen.height) {
        console.log("Landscape => " + true);
    }
    else {
        console.log("Landscape => " + false);
    }
}

check_landscape(); 
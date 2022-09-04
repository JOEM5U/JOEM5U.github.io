let isDark = true; 

function switchModes(){

    if(isDark === true){
        console.log("i'm true");
        document.documentElement.style.setProperty("--col-01", "#171219")
        document.documentElement.style.setProperty("--col-02", "#f2fbeb")
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDark = false;
    } else{
        console.log("i'm false")
        document.documentElement.style.setProperty("--col-01", "#f2fbeb")
        document.documentElement.style.setProperty("--col-02", "#171219")
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDark = true;
    }
}
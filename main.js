const myFunction = () => {
    var showhide = document.getElementById("block");
    if (showhide.style.display === "block"){
        showhide.style.display = "none";
    }
    else{
        showhide.style.display = "block";
    }
}
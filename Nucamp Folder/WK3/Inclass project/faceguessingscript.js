
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theBody = document.getElementsByTagName("body")[0];
function generateFaces(){ 


    for (x = 1; x <= numberOfFaces; x++) {
        randomTop = Math.floor(Math.random() * Math.floor(400));
        randomLeft = Math.floor(Math.random() * Math.floor(400));
        var Img = document.createElement("img");
        Img.src = "smile.png";
        Img.style.left = randomLeft + "px";
        Img.style.top = randomTop + "px";
        theLeftSide.appendChild(Img);
    }


    var finishedLeft = theLeftSide.cloneNode(true);
    var theRightSide = document.getElementById("rightSide");
    finishedLeft.removeChild(finishedLeft.lastChild);
    theRightSide.appendChild(finishedLeft);




    theLeftSide.lastChild.onclick = function nextlevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;
        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild); 
             }
             while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild); 
                 }
        generateFaces()
    }


        theBody.onclick = function gameOver() {
            alert("Game Over!");
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
        }
    }


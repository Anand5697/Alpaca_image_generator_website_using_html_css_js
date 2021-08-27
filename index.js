subOptionList = document.getElementById("sub_option_list");
imgDiv = document.getElementById("img-div");

accessorieslist = ["Earings", "flower", "glasses", "Headphone"];
backgroundlist = ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70",
                    "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", 
                    "yellow50", "yellow60", "yellow70"];
earslist = ["default", "tilt-backward", "tilt-forward"];
eyeslist = ["angry", "default", "naughty", "panda", "smart", "star"];
hairlist = ["default", "curls", "bang", "elegant", "fancy", "quiff", "short"];
legslist = ["bubble-tea", "cookie", "default", "game-console", "tilt-backward", "tilt-forward"];
mouthlist = ["astonished", "default", "eating", "laugh", "tongue"];
necklist = ["bend-forward", "bend-backward", "default", "thick"];

accessorizeList = ["accessories", "backgrounds", "ears", "eyes", "hair", "leg", "mouth", "neck"]
accessorizeArrayList = [
    ["Earings", "flower", "glasses", "Headphone"],
    ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70","green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70"],
    ["default", "tilt-backward", "tilt-forward"],
    ["angry", "default", "naughty", "panda", "smart", "star"],
    ["default", "curls", "bang", "elegant", "fancy", "quiff", "short"],
    ["bubble-tea", "cookie", "default", "game-console", "tilt-backward", "tilt-forward"],
    ["astonished", "default", "eating", "laugh", "tongue"],
    ["bend-forward", "bend-backward", "default", "thick"]
    ]

function randomSelect() {
    i=0;
    accessorizeList.forEach(y => {
        iy = "img-"+y;
        console.log(iy);
        ino = accessorizeArrayList[i].length;
        console.log(ino)
        ry = Math.floor(Math.random()* (ino - 0) + 0);
        console.log(ry);
        // console.log();
        document.getElementById(iy).src = "/alpaca/"+y+"/"+accessorizeArrayList[i][ry]+".png";
        i++;
    });
}
function addButton(x,y){
    btn = document.createElement("button");
    btn.addEventListener("click", function () {
        {
            document.getElementById("img-"+y).src = "/alpaca/"+y+"/"+x+".png";
        }
      });
    btnValue = document.createTextNode(x);
    btn.appendChild(btnValue);
    document.getElementById("sub_option_list").appendChild(btn);
    // console.log(x.index);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function accessories(){
    removeAllChildNodes(subOptionList);
    accessorieslist.forEach(x=>{
        addButton(x, "accessories");
    })
}
function background(){
    removeAllChildNodes(subOptionList);
    backgroundlist.forEach(x=>{
        addButton(x, "backgrounds");
    })
}
function ears(){
    removeAllChildNodes(subOptionList);
    earslist.forEach(x=>{
        addButton(x,"ears");
    })
}
function eyes(){
    removeAllChildNodes(subOptionList);
    eyeslist.forEach(x=>{
        addButton(x, "eyes");
    })
}
function hair(){
    removeAllChildNodes(subOptionList);
    hairlist.forEach(x => {
        addButton(x, "hair");
    });   
}
function legs(){
    removeAllChildNodes(subOptionList);
    legslist.forEach(x=>{
        addButton(x,"leg");
    })
}
function mouth(){
    removeAllChildNodes(subOptionList);
    mouthlist.forEach(x=>{
        addButton(x,"mouth");
    })
}
function neck(){
    removeAllChildNodes(subOptionList);
    necklist.forEach(x=>{
        addButton(x,"neck");
    })
}

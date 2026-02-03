const world = document.getElementById('game-world');
const totalRows = 19;
const totalCols = 19;


for (let r = 0; r < totalRows; r++) {
    for (let c = 0; c < totalCols; c++) {
        const block = document.createElement('div');
        block.classList.add("cell");
        if (r == 12) {
            block.classList.add('grass'); 
        } else if (r > 12 && r < 16) {
            block.classList.add('dirt'); 
        } else if(r >= 16) {
            block.classList.add('stone'); 
        }
        world.appendChild(block);
    }
}

world.addEventListener("click", (event) => {
    console.log(event.target.classList);
    if(world.style.cursor.includes("icon1") && event.target.classList.contains("stone")){
        event.target.className = "cell";
        // event.target.classList.remove("stone");
    }
    if(world.style.cursor.includes("icon3") && (event.target.classList.contains("dirt") || event.target.classList.contains("grass"))){
        event.target.className = "cell";
    }
})



const iconsSection = document.querySelector(".icons");
iconsSection.addEventListener('click', (event)=>{
    if(event.target.id == 1){
        world.style.cursor = `url("icons/icon1.jpg"), pointer`;
    }
    if(event.target.id == 2){
        world.style.cursor = `url("icons/icon2.jpg"), pointer`;
    }
    if(event.target.id == 3){
        world.style.cursor = `url("icons/icon3.jpg"), pointer`;
    }
    if(event.target.id == 4){
        world.style.cursor = `url("icons/icon4.jpg"), pointer`;
    }
  
})




const addMatrix = (row = 1, column = 1) => {

    let div = document.querySelector("#container");

    for(let i = 0; i < row; i++){
        let child = document.createElement(`div`);
        child.classList.add(`row`);
        for(let j = 0; j < column; j++){
            let grandChildren = document.createElement("div");
            grandChildren.classList.add(`column`);

            child.appendChild(grandChildren);
        }
        div.appendChild(child);
    }
}

let inputText = document.querySelector("#text");

inputText.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        const matrix = inputText.value;
        let arr = matrix.split("x");

        let div = document.querySelector("#container");
        div.innerHTML ='';

        addMatrix(arr[0], arr[1]);

        columns = document.querySelectorAll(".column");

        columns.forEach(event => {
            event.addEventListener("mouseenter", tag => {
                tag.target.classList.add("column-new");
            });
            /*event.addEventListener("mouseleave", tag => {
                setTimeout(() => {
                    tag.target.classList.remove("column-new");
                }, 500);    
            });*/
        });
    }
})
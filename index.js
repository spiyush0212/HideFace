let box = null;

// Create the box 
createBox();
function createBox() {
    box = document.createElement('div');
    box.setAttribute("class", "mydragdiv");
    box.setAttribute("id", "mydiv");
    box.innerHTML = `<span id='close'>X</span>`;
    let body = document.getElementsByTagName('body')[0];

    body.prepend(box);
    // Drag the box
    dragElement(box);
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    box.addEventListener('mousedown', (e) => {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    });

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
}

// Delete the box
box.addEventListener('click', (e) => {
    if (e.target.className == "") {
        box.remove();
    }
})
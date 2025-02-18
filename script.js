//your code here
document.addEventListener("DOMContentLoaded", function () {
    let draggedElement = null;

    document.querySelectorAll(".draggable").forEach((div) => {
        div.addEventListener("dragstart", function (e) {
            draggedElement = this;
            e.dataTransfer.setData("text/plain", this.id);
        });

        div.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        div.addEventListener("drop", function (e) {
            e.preventDefault();
            if (draggedElement !== this) {
                // Swap background images
                let temp = this.style.backgroundImage;
                this.style.backgroundImage = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = temp;
            }
        });
    });
});

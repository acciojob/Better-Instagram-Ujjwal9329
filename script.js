document.addEventListener("DOMContentLoaded", function () {
    let draggedElement = null;

    document.querySelectorAll(".image").forEach((div, index) => {
        // Assigning a background image dynamically if missing
        const bgImages = [
            "url('https://picsum.photos/id/237/200/300')",
            "url('https://picsum.photos/seed/picsum/200/300')",
            "url('https://picsum.photos/200/300?grayscale')",
            "url('https://picsum.photos/200/300/')",
            "url('https://picsum.photos/200/300.jpg')",
            "url('https://picsum.photos/id/102/200/300')"
        ];
        div.style.backgroundImage = bgImages[index];
        div.style.height = "300px";
        div.style.width = "200px";
        div.style.margin = "10px";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.color = "white";
        div.style.fontWeight = "bold";

        div.addEventListener("dragstart", function (e) {
            draggedElement = this;
            e.dataTransfer.setData("text/plain", this.innerText); // Store text
            this.classList.add("selected");
        });

        div.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        div.addEventListener("dragleave", function () {
            this.classList.remove("selected");
        });

        div.addEventListener("drop", function (e) {
            e.preventDefault();
            if (draggedElement !== this) {
                // Swap inner text
                let tempText = this.innerText;
                this.innerText = draggedElement.innerText;
                draggedElement.innerText = tempText;

                // Swap background images
                let tempBg = this.style.backgroundImage;
                this.style.backgroundImage = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = tempBg;
            }
            this.classList.remove("selected");
        });

        div.addEventListener("dragend", function () {
            this.classList.remove("selected");
        });
    });
});

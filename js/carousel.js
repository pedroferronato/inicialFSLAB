document.querySelector("#items")
    .addEventListener("wheel", event => {
        if (event.deltaY > 0) {
            event.target.scrollBy(400, 0)
        } else {
            event.target.scrollBy(-400, 0)
        }
    });

document.querySelector("#items")
    .addEventListener("mouseover", over => {
        document.body.style.overflow = "hidden";
    });

document.querySelector("#items")
    .addEventListener("mouseout", out => {
        document.body.style.overflow = "auto";
    })


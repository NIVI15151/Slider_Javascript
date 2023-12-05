const images = document.querySelectorAll(".image");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");

let slidenumber = 1;
const length = images.length;

// Remove existing buttons
bottom.innerHTML = "";

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

const resetbg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
};

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetbg();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slidenumber = i + 1;
        button.style.backgroundColor = "white";
    });
});

const right = document.querySelector(".right");
const left = document.querySelector(".left");

const changecolor = () => {
    resetbg();
    buttons[slidenumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
    slidenumber < length ? nextslide() : getfirstslide();
    changecolor();
});

left.addEventListener("click", () => {
    slidenumber > 1 ? prevslide() : getlastslide();
    changecolor();
});

const nextslide = () => {
    if (slidenumber < length) {
        slider.style.transform = `translateX(-${slidenumber * 800}px)`;
        slidenumber++;
    } else {
        slider.style.transform = `translateX(0px)`;
        slidenumber = 1;
    }
};

const prevslide = () => {
    if (slidenumber > 1) {
        slidenumber--;
        slider.style.transform = `translateX(-${(slidenumber - 1) * 800}px)`;
    } else {
        slidenumber = length;
        slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    }
};

const getfirstslide = () => {
    slider.style.transform = `translateX(0px)`;
    slidenumber = 1;
};

const getlastslide = () => {
    slider.style.transform = `translateX(${(length - 1) * 800}px)`;
    slidenumber = length;
};

function options(){
    let btn = document.querySelector(".nav-top");
    btn.classList.toggle("show");
}

// ------------ Basic package section ------------
const b_minus = document.querySelector(".b-minus");
const b_plus = document.querySelector(".b-plus");
const b_price = document.querySelector("#basic-price");
const b_per_room = document.querySelector(".b-per-room");

const b_btn = document.querySelector("#basic-signup");
const b_msg = document.querySelector("#basic-msg");

let basicPrice = 199, b_count = 1;

b_plus.addEventListener("click", () => {
    basicPrice += 199;
    b_count++;
    b_price.innerHTML = "$ " + basicPrice;
    b_per_room.innerHTML = b_count + " room";
});

b_minus.addEventListener("click", () => {
    basicPrice -= 199;
    b_count--;
    if (b_count < 1) {
        basicPrice = 199;
        b_count = 1;
        b_price.innerHTML = "$ " + basicPrice;
        b_per_room.innerHTML = b_count + " room";
    } else {
        b_price.innerHTML = "$ " + basicPrice;
        b_per_room.innerHTML = b_count + " room";
    }
});

b_btn.addEventListener("click", () => {
    b_msg.style.display = "block";
    b_msg.innerHTML = "Thank you for choosing " + b_count + " room";
});



// ------------ Pro package section ------------
const p_minus = document.querySelector(".p-minus");
const p_plus = document.querySelector(".p-plus");
const p_price = document.querySelector("#pro-price");
const p_per_room = document.querySelector(".p-per-room");

const p_btn = document.querySelector("#pro-signup");
const p_msg = document.querySelector("#pro-msg");

let proPrice = 249, p_count = 1;

p_plus.addEventListener("click", () => {
    proPrice += 249;
    p_count++;
    p_price.innerHTML = "$ " + proPrice;
    p_per_room.innerHTML = p_count + " room";
});

p_minus.addEventListener("click", () => {
    proPrice -= 249;
    p_count--;
    if (p_count < 1) {
        proPrice = 249;
        p_count = 1;
        p_price.innerHTML = "$ " + proPrice;
        p_per_room.innerHTML = p_count + " room";
    } else {
        p_price.innerHTML = "$ " + proPrice;
        p_per_room.innerHTML = p_count + " room";
    }
});

p_btn.addEventListener("click", () => {
    p_msg.style.display = "block";
    p_msg.innerHTML = "Thank you for choosing " + p_count + " room";
});

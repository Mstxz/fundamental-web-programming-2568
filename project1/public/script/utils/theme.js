let dark = "bg-ci-beige-2 text-ci-brown-1";
let light = "bg-ci-main-1 text-black";

let d = new Date();

if (d.getHours() < 18 && d.getHours() > 6) {
    document.body.className = dark;
}
else {
    document.body.className = dark;
}

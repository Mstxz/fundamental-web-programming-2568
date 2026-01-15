let light = "bg-ci-beige-2 text-ci-brown-1";
let dark = "bg-ci-brown-1 text-ci-beige-1";

let d = new Date();

if (d.getHours() < 18 && d.getHours() > 6) {
    document.body.className = light;
}
else {
    document.body.className = dark;
}

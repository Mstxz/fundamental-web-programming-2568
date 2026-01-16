let dark = "bg-[linear-gradient(rgba(54,35,32,0.8),rgba(54,35,32,0.8)),url('/images/background.webp')] bg-center bg-no-repeat bg-fixed bg-cover text-ci-beige-1";
let light = "bg-[linear-gradient(rgba(224,180,140,0.6),rgba(224,180,140,0.6)),url('/images/background.webp')] bg-center bg-no-repeat bg-fixed bg-cover text-ci-brown-1";

let d = new Date();

if (d.getHours() < 18 && d.getHours() > 6) {
    document.body.className = light;
}
else {
    document.body.className = dark;
}

/* Tailwind safelist */

/* @tailwindcss-intellisense */
let dark = "bg-slate-900 text-white";
let light = "bg-ci-main-1 text-black";

let d = new Date();

if (d.getHours() < 18 && d.getHours() > 6) {
    document.body.className = light;
}
else {
    document.body.className = dark;
}

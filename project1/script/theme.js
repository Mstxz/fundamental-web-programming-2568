let dark = 'bg-slate-800 text-white';
let light = 'bg-slate-200 text-black';

let d = new Date();

if (d.getHours() < 18 && d.getHours() > 6) {
    document.body.className = light;
} else {
    document.body.className = dark;
}

console.log(d.getHours());
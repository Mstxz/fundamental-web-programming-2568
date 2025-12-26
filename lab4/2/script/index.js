const seaCountries = [
  { en: "Select Country", th: "เลือกประเทศ" },
  { en: "Thailand", th: "ประเทศไทย" },
  { en: "Vietnam", th: "เวียดนาม" },
  { en: "Laos", th: "ลาว" },
  { en: "Myanmar", th: "เมียนมา" },
  { en: "Malaysia", th: "มาเลเซีย" },
  { en: "Singapore", th: "สิงคโปร์" },
  { en: "Indonesia", th: "อินโดนีเซีย" },
  { en: "Philippines", th: "ฟิลิปปินส์" },
  { en: "Brunei", th: "บรูไน" }
];

const label = [
    {en: "First Name", th: "ชื่อ"},
    {en: "Last Name", th: "นามสกุล"},
    {en: "Country", th: "ประเทศ"},
    {en: "Change Language", th: "เปลี่ยนภาษา"},
]

let n = document.getElementById('name');
let sn = document.getElementById('surname');
let cname = document.getElementById('coun');
let btn = document.getElementById('changelanbtn');

let currentLang = "th";

function addOption() {
  setCountries(currentLang);
}

function changelan() {
  currentLang = currentLang === "th" ? "en" : "th";
  setCountries(currentLang);
}

function setCountries(lang) {

    n.textContent = label[0][lang];
    sn.textContent = label[1][lang];
    coun.textContent = label[2][lang];
    btn.textContent = label[3][lang];

    const selection = document.getElementById("op");
    selection.innerHTML = "";

    seaCountries.forEach((c, index) => {
        const option = document.createElement("option");

        option.value = index === 0 ? "" : c.en;

        option.textContent = c[lang];

        if (index === 0) {
          option.disabled = true;
          option.selected = true;
        }

        selection.appendChild(option);
    });
}

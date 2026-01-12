function randomNumber() {
  let a = [
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/1.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/2.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/3.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/4.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/5.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/6.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/7.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/8.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/9.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/0.png",
  ];
  document.querySelectorAll(".number").forEach((el) => {
    let b = Math.floor(Math.random() * 10);
    const value = b;

    if (!isNaN(value)) {

      el.src = a[b];
    }
  });
}

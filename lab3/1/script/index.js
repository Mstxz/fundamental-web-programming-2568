function submission() {
    const username = checkusername(document.getElementById('user').value);
    const email = checkemail(document.getElementById('email').value);
    const phone = checkphone(document.getElementById('tel').value);
    const strength = checkpassword(document.getElementById('pw').value);
    const confirm = confirmpassword();

    if (username && email && phone && strength && confirm) {
        alert("Welcome");
    }
}

function checkusername(name){
    return name.length >= 5;
}

function checkemail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkphone(phone) {
    return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}


function checkpassword(pw) {
    let countint = 0;
    let countupper = 0;
    let countlower = 0;
    let countspecial = 0;

    for (let c of pw) {
        if (isDigit(c)) {
            countint++;
        } else if (isLower(c)) {
            countlower++;
        } else if (isUpper(c)) {
            countupper++;
        } else if (isPrintable(c)) {
            countspecial++;
        }
    }

    if (pw.length >= 8 && countint > 0 && countlower > 0 && countupper > 0 && countspecial > 0){
        return true;
    }
    else {
        return false;
    }
}

function confirmpassword() {
    let password = document.getElementById('pw').value;
    let confirm = document.getElementById('confirmpw').value;

    return password == confirm;
}


function isDigit(c) {
    return c >= '0' && c <= '9';
}

function isUpper(c) {
    return c >= 'A' && c <= 'Z';
}

function isLower(c) {
    return c >= 'a' && c <= 'z';
}

function isPrintable(c) {
    return !/[\p{Cc}\p{Cf}]/u.test(c);
}

function submit() {
    let uname = username.value;
    let phoneno = phone.value;
    let emailid = email.value;
    let pswd1 = pwd1.value;
    let pswd2 = pwd2.value;


    if (uname === '' || phoneno === '' || emailid === '' || pswd1 === '' || pswd2 === '') {
        alert('Fields cannot be empty')
    } else {
        if (!/^\d{10}$/.test(phoneno)) {
            alert('Invalid phone number');
            return;
        }
         else {
            if (!/^[^\s@*+]+@[^\s@]+\.[^\s@]+$/.test(emailid)) {
                alert('Enter a valid email address');

            }
            else {
                if (pswd1.length <= 5) {
                    alert('Password must be at least 6 characters long');
                }
                else {
                    if (!(pswd1 === pswd2)) {
                        alert("Password doesn't match");
                    }else{
                        alert('Information saved ')
                    }
                }
            }

        }
    }
}
//variables
const signUpApi = "http://localhost:3000/api/v1/auth/signup"
const signInApi = "http://localhost:3000/api/v1/auth/login"
const verifyApi = "http://localhost:3000/api/v1/auth/verify-otp"
const userTimelineApi = "http://localhost:3000/api/v1/timelines"

let $ = document
let signUpBtn = $.getElementById("signupbtn")
let signInDiv = $.getElementById("signindiv")
let signUpDiv = $.getElementById("signupdiv")
let leftPanel = $.getElementById("leftpanel")
let panelParent = $.getElementById("panelparent")
let toggle = $.getElementById("toggle")
let signInBtn = $.getElementById("signinbtn")
let pass = $.getElementById("pass")
let rePass = $.getElementById("repass")
let snPass = $.getElementById("snpass")
let iconNewPass = $.getElementById("iconnewpass")
let iconRePass = $.getElementById("iconrepass")
let iconPass = $.getElementById("iconpass")
let addSug = $.getElementById("addSug")
let signUpForm = $.getElementById("signUpForm")
let addSugCon = $.getElementById("addSugCon")
let userEmail = $.getElementById("email")
let addSugEmail = $.getElementById("addSugEmail")
let userNameSu = $.getElementById("userName")
let userSvg = $.getElementById("userSvg")
let emailSvg = $.getElementById("emailSvg")
let siUserSvg = $.getElementById("siUserSvg")
let userNameSi = $.getElementById("userNameSi")
let signInForm = $.getElementById("signinfrm")
let addSugConSi = $.getElementById("addSugConSi")
let otpModal = $.getElementById("otpModal")
let otpForm = $.getElementById("otpForm")
let cancelBtn = $.getElementById("cancelBtn")
let verifyBtn = $.getElementById("verifyBtn")
let otpInps = $.querySelectorAll(".inps")
let showNewPassFlag = false
let showRePassFlag = false
let showSnPassFlag = false
let userValidateFlag = false
let emailValidFlag = true
//animation form
const changeFormSu = () => {
    signInDiv.className = "w-1/2 z-10 relative left-0 translate-x-[200%] hidden"
    leftPanel.className = "order-20   absolute w-1/2 h-full  flex flex-col justify-center gap-10  items-center px-10  text-center top-0 transition-all duration-700 ease-in-out translate-x-0 "
    signUpDiv.className = "order-0 translate-x-[100%] w-1/2  transition-all duration-700 ease-in-out"
    panelParent.className = "relative top-0   w-1/2 h-full rounded-tr-4xl rounded-br-4xl overflow-hidden transition-all duration-700 ease-in-out rounded-tl-4xl rounded-bl-4xl z-50 translate-x-[-100%] "
    toggle.className = " h-full bg-[var(--btncol)] text-white relative -left-full w-[200%] translate-x-0 transition-all duration-700 ease-in-out translate-x-[50%]"
}
const changeFormSi = () => {
    signInDiv.className = "relative  top-0 h-full left-0 w-1/2 z-20  transition-all duration-700 ease-in-out"
    leftPanel.className = "absolute  translate-x-[200%] w-1/2 h-full flex flex-col justify-center gap-10  items-center px-10  text-center top-0  transition-all duration-700 ease-in-out  "
    signUpDiv.className = "relative   top-0 h-full left-0 w-1/2 hidden opacity-0  z-10 transition-all duration-700 ease-in-out"
    panelParent.className = "relative  top-0  w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out rounded-tl-4xl rounded-bl-4xl z-50 "
    toggle.className = "h-full bg-[var(--btncol)] text-white relative -left-full w-[200%] translate-x-0 transition-all duration-700 ease-in-out"
}
signInBtn.addEventListener("click", changeFormSi)
signUpBtn.addEventListener("click", changeFormSu)
//showpassword
iconNewPass.addEventListener("click", () => {

    if (showNewPassFlag) {
        showNewPassFlag = false
        iconNewPass.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 	0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 	0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />'
        pass.type = "password"
    } else {
        showNewPassFlag = true
        iconNewPass.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />'
        pass.type = "text"
    }
})
iconRePass.addEventListener("click", () => {
    if (showRePassFlag) {
        showRePassFlag = false
        iconRePass.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 	0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 	0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />'
        rePass.type = "password"
    } else {
        showRePassFlag = true
        iconRePass.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />'
        rePass.type = "text"

    }
})
iconPass.addEventListener("click", () => {
    if (!showSnPassFlag) {
        showSnPassFlag = true
        iconPass.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />'
        snPass.type = "text"
    } else {
        showSnPassFlag = false
        iconPass.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 	0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 	0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />'
        snPass.type = "password"
    }
})
//NewpassRegex
let newPassRegex = /^(?=.*[\D])[\w_.@#$%]{6,10}$/
//EmailRegex
let emailRegex = /((\w+\.?)+[\@][\w]{5,7}.com)/g
//alert to user
const userNotValid = (elem, alertSpan) => {
    elem.focus()
    alertSpan.style.color = "red"
    alertSpan.innerText = "Invalid!"
    elem.style.border = "2px solid red"
    alertSpan.style.display = "block"
}
const userValid = (elem, alertSpan) => {
    alertSpan.style.display = "none"
    elem.style.border = ""
}
userEmail.addEventListener("keyup", () => {
    if (!emailRegex.test(userEmail.value)) {
        userNotValid(userEmail, addSugEmail)
        emailValidFlag = false

    } else {
        userValid(userEmail, addSugEmail)
        emailValidFlag = true
    }

})
//invalid or valid new pass
const check = () => {
    let checkFlag = newPassRegex.test(pass.value)
    if (!checkFlag) {
        addSug.style.color = "red"
        addSug.innerText = "Between 6 and 10 and at least one letter"
        pass.style.border = "2px solid red"
        addSug.style.display = "block"
    } else {
        userValid(pass, addSug)
    }
}
pass.addEventListener("keyup", check)
//send informations to back from register
signUpForm.addEventListener("submit", (e) => {

    let userPass = pass.value
    let userPassConfrim = rePass.value

    if (newPassRegex.test(pass.value) && newPassRegex.test(rePass.value)) {
        if (userPass === userPassConfrim) {
            userValidateFlag = true
        }
    } else {
        userValidateFlag = false
    }
    if (!userValidateFlag || !emailValidFlag) {
        e.preventDefault()
        userNotValid(rePass, addSugCon)
        alert("Enter the information correctly")
    } else {
        e.preventDefault()
        let user = {
            username: userNameSu.value,
            email: userEmail.value,
            password: pass.value,
        }
        fetch(signUpApi, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success State: ", data);
            })
            .catch(err => {
                console.warn("Error: ", err)
            })
        otpModal.style.display = "block"
        
    }
})
cancelBtn.addEventListener("click", () => {
    otpModal.style.display = "none"
})
verifyBtn.addEventListener("click", () => {
    let otpValue = ""
    otpInps.forEach(input => {
        otpValue += input.value
    })
    let veryfyUser = {
        email: userEmail.value,
        otp: otpValue,
    }
   
    
    
    fetch(verifyApi, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(veryfyUser),
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => {
            console.log("Success State: ", data);
        })
        .catch(err => {
            console.warn("Error: ", err);
        })
        
})
//send informations to back from signin form
signInForm.addEventListener("submit", e => {
    let passSi = snPass.value
    if (newPassRegex.test(passSi)) {
        e.preventDefault()
        let userSi = {
            username: userNameSi.value,
            password: passSi,
        }
        userValid(snPass, addSugConSi)

        fetch(signInApi, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userSi),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success State: " , data);
            })
            .catch(err => {
                console.warn("Error: ", err);
            })
    } else {
        e.preventDefault()
        addSugConSi.style.color = "red"
        addSugConSi.innerText = "Between 6 and 10 and at least one letter"
        snPass.style.border = "2px solid red"
        addSugConSi.style.display = "block"
    }
})
//hide & block icons
const hideSvg = (svg) => {
    svg.style.display = "none"
}
const blockSvg = (svg) => {
    svg.style.display = "block"
}
userNameSu.addEventListener("focus", () => {
    hideSvg(userSvg)
})
userNameSu.addEventListener("blur", () => {
    blockSvg(userSvg)
})
userEmail.addEventListener("focus", () => {
    hideSvg(emailSvg)
})
userEmail.addEventListener("blur", () => {
    blockSvg(emailSvg)
})
userNameSi.addEventListener("focus", () => {
    hideSvg(siUserSvg)
})
userNameSi.addEventListener("blur", () => {
    blockSvg(siUserSvg)
})

otpInps.forEach(input => {
    input.addEventListener("keyup", (e) => {
        try {
            if (e.key === "Tab") {

            } else {
                if (e.key === "Backspace") {

                    input.previousElementSibling.focus()
                }
                else {
                    if (e.key === " ") {

                    } else {
                        input.nextElementSibling.focus()
                    }
                }
            }
        }
        catch (err) {
            console.warn(err.message);
        }
    })
})
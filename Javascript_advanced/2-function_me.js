function welcomeMessage(fullName){
    return function() {
        alert ("welcome " + fullName);
    }
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
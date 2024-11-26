 
       const passwordBox = document.getElementById("password");
       const length = 12;

       const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       const lowerCase ="abcdefghijklmnopqrstuvwxyz";
       const numbers ="0123456789";
       const symbols = "!@#$%^&*()_+?><,.';{}[?]";
       const allchar = upperCase + lowerCase + numbers + symbols;

       function createPassword(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while(length > password.length){
            password += allchar[Math.floor(Math.random()* allchar.length)];
        }
        
        passwordBox.value = password;
        console.log(passwordBox);
        console.log("button clicked");
       }

       const btn = document.getElementById("btn");
       btn.addEventListener("click",createPassword)

       function copyPassword(){
        passwordBox.select();
        document.execCommand("copy");
       }
      
       const copyBtn = document.getElementById("copybtn");
       copyBtn.addEventListener("click",copyPassword);
// Function for convert email to lower case
function asciiToLowerCase(str) {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += str[i];
        }
    }
    
    return result;
}

// Fetching with Then-catch
(() => {
    const withBuiltIn = []
    const withoutBuiltIn = []
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                throw "Terjadi Error";
            }

            return response.json()
        })
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                withBuiltIn[i] = data[i].email.toLowerCase();
                withoutBuiltIn[i] = asciiToLowerCase(data[i].email);   
            }

            console.log('Using Built-In Method (Then-catch):');
            console.log(withBuiltIn);
            console.log('Without Built-In Method (Then-catch):');
            console.log(withoutBuiltIn);
        })
        .catch((e) => {
            console.log(e);
        })
})()
// emailFetch()

// Fetching with Async-await
(async () => {
    try {
        const withBuiltIn = []
        const withoutBuiltIn = []
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw "Terjadi Error";
        }
        
        const data = await response.json()

        for (let i = 0; i < data.length; i++) {
            withBuiltIn[i] = data[i].email.toLowerCase();
            withoutBuiltIn[i] = asciiToLowerCase(data[i].email);   
        }

        console.log('Using Built-In Method (Async-await):');
        console.log(withBuiltIn);
        console.log('Without Built-In Method (Async-await):');
        console.log(withoutBuiltIn);
    } catch (e) {
        console.log(e);
    }
})()
// fetchEmail()
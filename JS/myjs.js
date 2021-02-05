function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let messages = ["Hi I am Rachit Agrawal","Nice to meet you", "Thanks for coming on my page"];
async function textch(){
    for (let index = 0; index <= 9; index++) {
        let message = messages[index%3];
        // mm = document.createTextNode(message);
        console.log(message);
        document.getElementById("textchange").textContent = message;
        
        await sleep(4000);
    }
}

textch();
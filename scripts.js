//Business Logic 

function testGenerateListFunction(userInput) {
    let list = [];
    for (let i = 0; i <= userInput; i++) {
      let value = i.toString();
      if (value.includes("3")) {
        list.push("Won't you be my neighbor?");
      } else if (value.includes("2")) {
        list.push("Boop!");
      } else if (value.includes("1")) {
        list.push("Beep!");
      } else {
        list.push(value);
      }
    }
console.log(list.join(", "));
}


      //UI

      let list = [];
      for (let i = 0; i <= userInput; i++) {
        let value = i.toString();
        if (value.includes("3")) {
          list.push("Won't you be my neighbor?");
        } else if (value.includes("2")) {
          list.push("Boop!");
        } else if (value.includes("1")) {
          list.push("Beep!");
        } else {
          list.push(value);
        }
      }
  
      resultList.innerHTML = list.join(", ");
    }
  


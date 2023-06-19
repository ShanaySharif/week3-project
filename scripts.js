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
    return list;
  }

//UI
function displayList() {
    let userInput = parseInt(document.getElementById("user-input").value);
    let resultList = document.getElementById("result-list");

    let list = generateList(userInput);

    resultList.innerHTML = list.join(", ");
  }

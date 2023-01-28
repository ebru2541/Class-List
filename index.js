let list = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

const re = /["-", " "]/g;
// const newList = list.toString().replaceAll("-", ",").split(",")

const newList = list
  .toString()
  .replaceAll(" - ", ",")
  .replaceAll(" ", ",")
  .replaceAll(",,", ",")
  .split(",");
console.log(newList);

const table = document.getElementById("stList");
console.log(table);
console.log(newList.length);

function newTable() {
  for (let i = 0; newList.length > i; i++) {
    setTimeout(() => {
      if (i % 5 == 0) {
        const tr = document.createElement("tr");
        table.children[0].lastElementChild.after(tr);
      }
      table.lastElementChild.lastElementChild.innerHTML += `<td> ${newList[i]} </td>`;
    }, `${i}000`);
  }
}

newTable();

var members = ["Vivian", "Ava", "Josh", "Patrick", "Mike"];


function addPerson(name) {
  members.push(name);
}

function findPerson(name) {
  results = members.indexOf(name);
  if (results === -1) {
    return "Sorry " + name + " is not in line!";
  } else return name + "'s" + " number in line is " + results + "!";
}

function skipLine(num, name) {
  var remove = 0;
  members.splice(num, remove, name);
  return members.join(", ");
}

function leaveLine(name) {
  let arr = members;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === name) {
      arr.splice(i, 1);
      return members.join(", ");
    }
  }
}
console.log(addPerson("Mary"));
console.table(members);
console.log(findPerson("Ava"));
console.log(findPerson("Bee"));
console.log(skipLine(2, "Zoe"));
console.log(leaveLine("Mike"));
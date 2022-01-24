function calculateSalary(role) {

  if (role == "ceo") {
    console.log("2200");
  } else if (role == "manager") {
    console.log("1800");
  } else if (role == "cto") {
    console.log("1750");
  } else if (role == "developer") {
    console.log("1500");
  } else {
    console.log("1000");
  }
}

calculateSalary("cto")
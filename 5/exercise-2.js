function calculateSalary(role) {
  role = prompt("Quale Ruolo?");

  switch (role) {
    case "ceo":
      console.log("2200");
      break;
    case "manager":
    case "cto":
      console.log("1800");
      break;
    case "developer":
      console.log("1500");
      break;
    default:
      console.log("1000");
      break;
  }

}

calculateSalary()
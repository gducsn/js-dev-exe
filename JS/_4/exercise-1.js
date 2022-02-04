function calculateSalary(role) {

  if (role == "ceo") {
    return 2200;
  } else if (role == "manager") {
    return 1800;
  } else if (role == "cto") {
    return 1750;
  } else if (role == "developer") {
    return 1500;
  } else {
    return 1000;
  }
}

calculateSalary("cto")
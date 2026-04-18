"use strict";

const calculateAge = (fatherAge, sonAge) => {
  if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
    return 0;
  }

  const ageDiff = fatherAge - sonAge;
  const years = sonAge - ageDiff;
  const absYears = Math.abs(years);

  let strYears;

  if (absYears >= 10 && absYears <= 20) {
    strYears = "років";
  } else {
    switch (String(absYears).slice(-1)) {
      case "1":
        strYears = "рік";
        break;
      case "2":
      case "3":
      case "4":
        strYears = "роки";
        break;
      default:
        strYears = "років";
    }
  }

  if (years === 0) {
    console.log("Батько вже вдвічі старший за сина.");
  } else if (years > 0) {
    console.log(
      `Батько був удвічі старший за сина ${absYears} ${strYears} тому`,
    );
  } else {
    console.log(
      `Батько буде удвічі старший за сина через ${absYears} ${strYears}`,
    );
  }

  return absYears;
};

console.log(calculateAge(40, 20));

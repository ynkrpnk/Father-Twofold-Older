"use strict";

// Documentation JSDoc
/**
 * 
 * @param {number} fatherAge  Поточний вік батька
 * @param {number} sonAge Поточний вік сина
 * @returns {number} Кількість років
 */

const calculateAge = (fatherAge, sonAge) => {
  if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
    return -1;
  }

  const ageDiff = fatherAge - sonAge;
  const years = sonAge - ageDiff;
  const absYears = Math.abs(years);

  return years;
};

const getYearWord = (years) => {
  const abs = Math.abs(years);

  if (abs >= 10 && abs <= 20) return "років";

  switch (String(abs).slice(-1)) {
    case "1":
      return "рік";
    case "2":
    case "3":
    case "4":
      return "роки";
    default:
      return "років";
  }
};

const printResult = (years) => {
  if (years === -1) {
    console.log("Некоректні дані");
    return;
  }

  const absYears = Math.abs(years);
  const word = getYearWord(years);

  if (years === 0) {
    console.log("Батько зараз удвічі старший за сина.");
  } else if (years > 0) {
    console.log(`Батько був удвічі старший ${absYears} ${word} тому`);
  } else {
    console.log(`Батько буде удвічі старший через ${absYears} ${word}`);
  }
};

const years = calculateAge(20, 5);
printResult(years);
//console.log(years);
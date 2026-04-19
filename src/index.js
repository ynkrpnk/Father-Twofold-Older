"use strict";

// Documentation JSDoc
/**
 * 
 * @param {number} fatherAge  Поточний вік батька
 * @param {number} sonAge Поточний вік сина
 * @returns {number} Кількість років
 */

function calculateAge(fatherAge, sonAge) {
  if (sonAge < 0 || fatherAge - sonAge < 15) return NaN;

  return fatherAge - 2 * sonAge;
}

function getYearWord(years) {
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
}

function printResult(years) {
  if (Number.isNaN(years)) {
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
}

const result = calculateAge(31, 11);
printResult(result);
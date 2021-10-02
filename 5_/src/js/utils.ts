function sum(...numbers: Array<number>) {
  let result = 0;
  numbers.forEach((number) => (result += number));

  return result;
}

export { sum };

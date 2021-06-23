const printBinaryTree = () => {
  for (let i = 1; i < 14; i++) {
    const spaces = 21 - i;
    let statement = ``;
    for (let j = 1; j < spaces; j++) {
      statement += ` `;
    }
    if (i === 1) {
      statement += `1`;
    } else {
      i % 2 == 0 ? statement += `01`.repeat(i-1) + `0` : statement += `10`.repeat(i-1) + `1`;
    }
    console.log(statement);
  }
  for (let i = 1; i < 4; i++) {
    i !== 3 ? console.log(`                  000`) : console.log(`                  111`);
  }
}

module.exports = { printBinaryTree };

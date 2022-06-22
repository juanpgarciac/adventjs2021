function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let width = height + height - 1
    let i= 0
    let j = 1
    let spaces = ""
    let tree = ""
    while(i++ < height ){
      spaces = "_".repeat((width - j) / 2  );
      tree += spaces + "*".repeat(j) + spaces + "\n"
      j += 2
    }
    spaces = "_".repeat((width - 1) / 2 );
    tree += spaces + "#" + spaces + "\n"
    tree += spaces + "#" + spaces
    return tree
  }
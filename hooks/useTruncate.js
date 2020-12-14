const userTruncate = (texto, numeroPalabras, final = "") =>
  `${texto
    .replace(/(<([^>]+)>)/gi, "")
    .split(" ")
    .splice(0, numeroPalabras)
    .join(" ")}${final}`;

export default userTruncate;

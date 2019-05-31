function log(message, variable) {
  console.log(`${message}`, variable);
}

function get(variable) {
  return document.getElementById(`${variable}`);
}

export { log, get };

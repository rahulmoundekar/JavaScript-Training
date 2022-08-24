export function i18n(strings, ...vars) {
  // basic localization utility
  // TODO: replace each text fragment with its translation below, do not touch interpolated values

  const tem = "";
  const result = strings.reduce(
    (out, str) => translations[out] + translations[str]
  );

  return strings.reduce((prev, current) => (prev + current.name, ""));

  return result;
}

var authors = [
  { name: "some author" },
  { name: "another author" },
  { name: "last author" }
];
var authorString = authors.reduce(function (prevVal, currVal, idx) {
  return idx == 0 ? currVal.name : prevVal + ", " + currVal.name;
}, "");
console.log(authorString);

const translations = {
  "Hello ": "Bonjour ",
  ", you have ": ", vous avez ",
  " new mails.": " nouveaux messages."
};

// Exemple d'utilisation

const name = "Bob",
  nbMails = 3;

console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);

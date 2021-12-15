const publicDomains = require("./domains");

function isPublic(domain) {
  const response = publicDomains.includes(domain);
  return response;
}

function getDomain(email) {
  //verifica se é um email válido com "@"
  if (!email.includes("@")) {
    return;
  }

  const cuttedEmail = user.email.split("@", 2);
  //verifica se tem o dominio apos o "@"
  if (cuttedEmail.length !== 2) {
    return;
  }

  const emailDomain = domain[1];

  return emailDomain;
}

module.exports = {
  publicDomains,
  isPublic,
  getDomain,
};

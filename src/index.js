const publicDomains = require("./domains");

function isPublic(domain) {
  const response = publicDomains.includes(domain);
  return response;
}

module.exports = {
  publicDomains,
  isPublic,
};

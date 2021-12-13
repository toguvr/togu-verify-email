const publicDomains = require("./domains");

function isPublic(domain: string) {
  const response = publicDomains.includes(domain);
  return response as boolean;
}

module.exports = {
  publicDomains,
  isPublic,
};

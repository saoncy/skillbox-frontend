function getPageLinksDomains() {
  return Array.from(document.getElementsByTagName('a')).map(link => {
    return link.href.replace('http://', '').replace('https://', '')
    .replace('www.', '')
    .split('/').shift();
  }).reduce((uniqueDomains, domain) => {
    if (uniqueDomains.includes(domain)) return uniqueDomains;

    return [...uniqueDomains, domain];
  }, []);
}

console.log(getPageLinksDomains());

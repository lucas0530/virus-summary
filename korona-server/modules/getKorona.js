const rp = require('request-promise');
const cheerio = require('cheerio');

const getData = () => {
      return new Promise((resolve, reject) => {
        var revoke = rp({
          uri: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%BD%94%EB%A1%9C%EB%82%98+%ED%98%84%ED%99%A9&oquery=%EC%BD%94%EB%A1%9C%EB%82%98+%ED%98%84%ED%99%A9&tqi=UDLxusprvmsssN%2Fhc6sssssst0N-342294',
          transform: body => {
            return cheerio.load(body)('p.txt strong.num').toArray().map(e => cheerio.load(e).text());
          }
        });
        resolve(revoke);
      });
}

const init = async () => {
  console.log(await getData());
}
init();

module.exports = getData;

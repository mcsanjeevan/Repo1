let homepage = require('../pages/homepage');
describe('Open JetBlue', function() {
    it('Search Flights', function() {
      browser.get('https://www.jetblue.com/');
      browser.manage().window().maximize();
      homepage.signClick();
      homepage.enterUsername('sahananmurali@gmail.com');
      homepage.enterPassword('I3icecream');
      homepage.clickGo();
    });
});
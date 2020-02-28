let loginTest = require('../pages/loginTest');
describe('open browser', function() {
    it('check login', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
      browser.manage().window().maximize();
      loginTest.enterUsername('angular');
      loginTest.enterPassword('password');
      loginTest.enterDupUser('sanju');
      loginTest.clickGo();
      browser.sleep(3000);
      
    });
});
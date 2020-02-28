let AlertDemo = require('../pages/AlertDemo');
describe('open browser', function() {
    it('Alert Handler',  async()=> {
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment');
        browser.manage().window().maximize();
        AlertDemo.lastPgBtn();
        AlertDemo.submit();
        browser.sleep(3000);
      })
})
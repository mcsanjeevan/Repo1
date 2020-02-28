let calculator = require('../pages/calculator');
   describe('open browser', function() {
    it('Calculator',  async()=> {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
      browser.manage().window().maximize();
    })
    it('second it block', async ()=>{

   
      calculator.arithmetic(3,3,"ADDITION");
      calculator.answer();
      calculator.arithmetic(3,3,"MULTIPLICATION");
      calculator.answer();
      calculator.arithmetic(3,3,"MODULO");
      calculator.answer();
      calculator.arithmetic(3,3,"SUBTRACTION");
      calculator.answer();
      calculator.arithmetic(3,3,"DIVISION");
      calculator.answer();
      browser.sleep(3000);
    });
    });
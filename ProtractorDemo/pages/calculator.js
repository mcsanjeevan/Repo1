let calculator =  function(){
    let firstNumber = element(by.model("first"));
    let secondNumber = element(by.model("second"));
    let operand = element.all(by.tagName("option"));
    let result = element(by.id("gobutton"));

    this.arithmetic = async function(fnum,snum,operator){
        firstNumber.sendKeys(fnum);
        secondNumber.sendKeys(snum);
        operand.each(function(items){
            items.getAttribute("value").then(function(val){
                if(val == operator){
                    items.click();
                }
            });    
        })
    };
    this.answer = function(){
        result.click();
    };

};
module.exports = new calculator();
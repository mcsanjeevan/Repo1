let loginTest = function(){
    let username = element(by.id("username"));
    let password = element(by.id("password"));
    let nickname = element(by.css("[ng-model='model[options.key]']"));
    let goButton = element(by.css(".btn"));
    
    
    
    this.enterUsername = function(user){
        username.sendKeys(user);
    };
    this.enterPassword =function(pass){
        password.sendKeys(pass);
    };
    this.enterDupUser = function(name){
        nickname.sendKeys(name);
    }
    this.clickGo = function(){
        goButton.click();
    };
};
module.exports = new loginTest();
let homepage=function(){
    let signButton = element(by.css(".main-nav-link[routerlink='/signin']"));
    let username = element(by.css("input[aria-labelledby='emailLabel emailError']"));
    let password = element(by.css("input[aria-labelledby='passwordLabel passwordError']"));
    let goButton = element(by.css(".bg-royal-blue"));
    
    
    this.signClick = function(){
        signButton.click();
    }
    this.enterUsername = function(user){
        username.sendKeys(user);
    };
    this.enterPassword =function(pass){
        password.sendKeys(pass);
    };
    this.clickGo = function(){
        goButton.submit();
    };
};
module.exports = new homepage();
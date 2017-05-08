/**
 HelloWorld
 */
HelloWorld = function(_config){
    this.name = _config.name || "Guest";
    this.greet = function(_name){
        return "Hello "+_name;
    }
    this.__setTemplate([
        {"#text": "{{greet:name}}"}
    ]);
}
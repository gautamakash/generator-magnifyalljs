var system = new magnifyall.System({

});
system.import("<%= basePackage %>.HelloWorld", function(){
    var helloWorld = new <%= basePackage %>.HelloWorld({
        name: "MagnifyAll"
    });
    
    helloWorld.__render(document.getElementById('main'));
});
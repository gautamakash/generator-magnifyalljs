var system = new System({

});
system.import("<%= basePackage %>.HelloWorld");
var helloWorld = new <%= basePackage %>.HelloWorld({
    name: "MagnifyAll"
});

helloWorld.__render(document.getElementById('main'));
describe('<%= basePackage %>.HelloWorld', function() {
  var helloWorld;
  // inject the HTML fixture for the tests
  beforeEach(function(done) {
    var fixture = '<div id="fixture"></div>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
    testSystem.import("<%= basePackage %>.HelloWorld", function(){
      done();
    });
  });// remove the html fixture from the DOM

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('greet return Hello name', function() {    
    helloWorld = new <%= basePackage %>.HelloWorld({});
    expect(helloWorld.greet("test-user")).toBe("Hello test-user");
  });

  it('render greet with name', function() {    
    helloWorld = new <%= basePackage %>.HelloWorld({name: "test-user"});
    helloWorld.__render(document.getElementById('fixture'));
    expect(document.getElementById('fixture').innerHTML).toBe("Hello test-user");
  });

});
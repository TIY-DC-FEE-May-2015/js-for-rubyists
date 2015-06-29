describe("JavaScript is a programming language", function(){

  it("should have numbers", function(){
    var x = 42

    expect( x ).to.equal(42)
    expect( x ).to.be.a("number")
  })

  it("should have strings", function(){
    var y = "a string"

    expect( y ).to.be.a("string")
  })

  it("should have booleans", function(){
    var z = true

    expect( z ).to.be.a("boolean")
  })

  it("can do math", function(){

    var a = 10
    var b = 20

    expect( a + b ).to.equal(30)

  })

  it("string concatenation", function(){

    var a = "hello"
    var b = "world"
    expect(a + ", " + b).to.equal("hello, world")

  })

})

describe("Flow Control", function(){

  it("if/else", function(){

    var x = 20
    var y

    if (x < 30) {
      y = true
    } 
    else {
      y = false
    }

    expect(y).to.equal(true)

  })

  it("if/else with equality", function(){

    var x = 20
    var y

    var z = (x !== "20")

    expect(z).to.equal(true)

  })

  it("while loops", function(){

    var kylesAge = 31

    while(kylesAge > 0) {
      expect(kylesAge).to.be.greaterThan(0)
      kylesAge -= 1
    }

    expect(kylesAge).to.equal(0)

  })

  it("for loops", function(){

    for( var i = 0; i < 10; i += 1 ) {
      expect(i).to.be.below(10)
    }

    expect(i).to.equal(10)

  })

})

describe("Complex Data Structures", function(){

  it("has arrays", function(){

    var array = [40, 50, 60]
    array.push(10)
    array.push(20)
    array.push(30)

    expect(array.length).to.equal(6)

    expect(array[4]).to.equal(20)

  })

  it("has objects", function(){

    var obj = {
      a: 10,
      b: 20,
      c: "some string"
    }

    obj.d = 42

    obj.e = {
      x: true, y: false
    }

    obj.e.q = null

    expect( obj.d ).to.equal(42)
    expect( obj["d"] ).to.equal(42)

    var s = "d"

    expect( obj[s] ).to.equal(42)

    obj[s] = [ "a", 'b', "c" ]

    expect( obj.d ).to.be.an("array")
    expect( obj.d[1] ).to.equal("b")

    expect( obj.e["x"] ).to.equal(true)
    expect( obj["e"].y ).to.equal(false)

  })

})

describe("Functions", function(){

  it("Functions are first-class", function(){

    var sayHi = function(name) {
      return "hello, " + name
    }

    expect( sayHi ).to.be.a("function")

    expect( sayHi("James") ).to.equal("hello, James")
    expect( sayHi() ).to.equal("hello, undefined")
    expect( sayHi("Kyle", "Su") ).to.equal("hello, Kyle")

  })

  it("Functions can be passed as parameters", function(){

    var firstStep = function(secondStep) {
      return secondStep() + 5
    }

    var returnTen = function() {
      return 10
    }

    expect( returnTen ).to.be.a("function")
    expect( returnTen() ).to.be.a("number")

    expect( returnTen() ).to.equal( 10 )
    expect( firstStep( returnTen ) ).to.equal( 15 )

  })

})

describe("jQuery accessors", function(){

  it("finds elements", function(){

    var $container = $("#container")

    expect( $container.length ).to.equal(1)

    $container.text("hello, world, from code")

    expect( document.getElementById("container").innerText ).to.equal("hello, world, from code")

  })

  it("finds many elements", function(){

    expect( $(".square").length ).to.equal(5)
    expect( $(".square.blue").length ).to.equal(2)

    $(".square").css({
      background: "rgb(128, 0, 128)",
      width: "30px",
      height: "30px"
    })

    expect( $(".square:eq(0)").css("background-color") ).to.equal("rgb(128, 0, 128)")

  })

  it("modify classes", function(){

    expect( $(".red.circle").length ).to.equal(1)

    $(".red.circle").addClass("big")

    expect( $(".red.circle").length ).to.equal(1)
    expect( $(".big.circle").length ).to.equal(1)

    $(".blue.circle").addClass("big")

    expect( $(".big.circle").length ).to.equal(3)

    $(".red.circle").removeClass("big")

    expect( $(".big.circle").length ).to.equal(2)

    $(".yellow.circle").toggleClass("big")

    expect( $(".big.circle").length ).to.equal(3)

    $(".yellow.circle").toggleClass("big")

    expect( $(".big.circle").length ).to.equal(2)
    
  })

})
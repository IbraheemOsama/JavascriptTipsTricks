var ClassA = function() {
    this.name = "class A";
}

var ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
}

ClassA.prototype.print = function() {
    console.log(this.name);
}

var a = new ClassA();

a.print();

ClassB.prototype=new ClassA();

var b= new ClassB();
b.print();

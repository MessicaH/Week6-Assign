var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#doSomething', function() {
        it('Should concatenate two parameters', function(){
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it("Should throw an error if first parameter is not a string", function() {
            expect(function () {
                doSomething(5, 5);
            }).to.throw(Error);
         });
    });
});


describe('MyFunctions', function() {
    describe('#shuffleDeck', function() {
        it("Should show shuffled game deck for the upcoming card game", function() {
            let t = shuffleDeck([]);
            expect(t).to.equal([]);
        });

        it("Should throw an error if not an array", function() {
            expect(function() {
                shuffleDeck(1, 2);
            }).to.throw(Error);
        });
    });
});

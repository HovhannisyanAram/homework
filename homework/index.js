// function Calculator() {

//   this.read = function() {
//     this.num = +prompt('num 1 ?', '0');
//     this.num2 = +prompt('num 2 ?', '0');
//   };
//   this.sum = function() {
//     return( this.num + this.num2 );
//   },
//   this.mul = function() {
//     return( this.num * this.num2 );
//   }
// };
// let calculator = new Calculator();
// calculator.read();
// alert( 'sum = ' + calculator.sum() );
// alert( 'mul = ' + calculator.mul() );


// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value += +prompt('ավելացրեք թիվ', '0');
//   };

// }

// let accumulator = new Accumulator(5);
// accumulator.read();
// accumulator.read();
// alert( accumulator.value );

  function Calculator() {

    this.read = function() {
      this.num = +prompt('թիվ առաջին', '0');
      this.num2 = +prompt('թիվ երկրորդ', '0');
    };
    this.sum = function() {
      return( this.num + this.num2 );
    };
    this.sub = function() {
      return( this.num - this.num2 );
    };
    this.mul = function() {
      return( this.num * this.num2 );
    };
    this.divide = function() {
      return( this.num / this.num2 );
    };
  };

let calculator = new Calculator();
calculator.read();
alert('գումարը = ' + calculator.sum() );
alert('տարբերությունը = ' + calculator.sub() );
alert('արտադրյալը = ' + calculator.mul() );
alert('բաժանարարը = ' + calculator.divide() );

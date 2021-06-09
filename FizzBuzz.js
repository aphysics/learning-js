// Clase elemental FizzBuzz

class FizzBuzz {
    // Solo un método para decir si es Fizz o Buzz o ambos

    static isFizzBuzz = (number) => {
        if((number % 3 === 0) && (number % 5 === 0)) {
            return "FizzBuzz!"
        }
        else if (number % 3 === 0) {
            return "Fizz"
        }
        else if (number % 5 === 0) {
            return "Buzz"
        }
        else {
            return "what are you up to?"
        }
    }
}

console.log(FizzBuzz.isFizzBuzz(5))
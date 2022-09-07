(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {

        let fruits = ['manzana','cereza','ciruela']
        return ( fruits.includes(fruit) );
    }

    type FruitColor = 'red'|'yellow'|'purple';
    const colors = ['red', 'yellow', 'purple' ]
    function getFruitsByColor( color: FruitColor ): string[] {

        // if ( color === 'red' ) {
        //     return ['manzana','fresa'];
        // } else if ( color === 'yellow') {
        //     return ['piña','banana'];
        // } else if ( color === 'purple') {
        //     return ['moras','uvas']
        // } else {
        //     throw Error('the color must be: red, yellow, purple');
        // }

        const fruitsPerColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas'],
        }

        if(  !Object.keys( fruitsPerColor  ).includes(color)) throw Error('The  color must be lol');

        return fruitsPerColor[color]

        // if (colors[0] == color) return ['manzana','fresa'];
        // if (colors[1] == color) return ['piña','banana'];
        // if (colors[2] == color) return ['moras','uvas'];
        // throw Error('the color must be: red, yellow, purple');
        
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        // function workingSteps() {
        //     if( isFirstStepWorking === true ) {
        //         if( isSecondStepWorking === true ) {
        //             if( isThirdStepWorking === true ) {
        //                 if( isFourthStepWorking === true ) {
        //                     return 'Working properly!';
        //                 }
        //                 else {
        //                     return 'Fourth step broken.';
        //                 }
        //             }
        //             else {
        //                 return 'Third step broken.';
        //             }
        //         }
        //         else {
        //             return 'Second step broken.';
        //         }
        //     }
        //     else {
        //         return 'First step broken.';
        //     }
        // }

        if(!isFirstStepWorking) return 'First step broken.';
        if(!isSecondStepWorking) return 'Second step broken.';
        if(!isThirdStepWorking) return 'Third step broken.';
                   
        return (!isFourthStepWorking) ?  'Fourth step broken.' : 'Working properly!' ;
        
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
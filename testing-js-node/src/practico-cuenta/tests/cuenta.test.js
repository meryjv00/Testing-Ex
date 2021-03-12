var Cuenta = require('../cuenta');

describe('TDD Cuenta', () => {
    let cuenta;
    beforeAll(() => {
        console.log('Antes de todas las pruebas creamos el Arrange Global');
        console.log('No tenemos ninguno por ahora');
    });

    // Antes de cada prueba
    beforeEach(() => {
        cuenta = new Cuenta();
    });

    //---------------------INGRESAR
    describe('TDD Cuenta: Ingresar', () => {
        test('Cuenta: al crear la cuenta el saldo debe ser 0', () => {
            expect(cuenta.getSaldo()).toBe(0);
        });

        test('Cuenta: al ingresar 100 en cuenta vacía el saldo debe ser 100', () => {
            cuenta.ingresar(100);
            expect(cuenta.getSaldo()).toBe(100);
        });

        test('Cuenta: al ingresar 3000 en cuenta vacía el saldo debe ser 3000', () => {
            cuenta.ingresar(3000);
            expect(cuenta.getSaldo()).toBe(3000);
        });

        test('Cuenta: al ingresar 3000 en cuenta con 100 el saldo debe ser 3100', () => {
            // Arrange (set up)
            cuenta.ingresar(100);
            // Act
            cuenta.ingresar(3000);
            // Assert
            expect(cuenta.getSaldo()).toBe(3100);
        });

        test('Cuenta: al ingresar -100 en cuenta vacía el saldo sigue siendo 0', () => {
            // Act
            cuenta.ingresar(-100);
            // Assert
            expect(cuenta.getSaldo()).toBe(0);
        });

        test('Cuenta: al ingresar 100.45 en cuenta vacía el saldo debe ser 100.45', () => {
            // Act
            cuenta.ingresar(100.45);
            // Assert
            expect(cuenta.getSaldo()).toBe(100.45);
        });

        test('Cuenta: al ingresar 100.454 en cuenta vacía el saldo debe ser 0', () => {
            // Act
            cuenta.ingresar(100.455);
            // Assert
            expect(cuenta.getSaldo()).toBe(0);
        });

        test('Cuenta: al ingresar 6000.00 en cuenta vacía el saldo debe ser 6000.00', () => {
            // Act
            cuenta.ingresar(6000);
            // Assert
            expect(cuenta.getSaldo()).toBe(6000);
        });

        test('Cuenta: al ingresar 6000.01 en cuenta vacía el saldo debe ser 0', () => {
            // Act
            cuenta.ingresar(6000.01);
            // Assert
            expect(cuenta.getSaldo()).toBe(0);
        });

        /**
         * "Test Driven Bug Fixing"
         * Hace tiempo que acabamos el desarrollo de nuestra aplicación y está funcionando en producción sin problemas.
         * Pero un día llega nuestro cliente super preocupado. La aplicación no va. Dice que a algunos usuarios les deja sin saldo.
         * Como bien sabemos por experiencia, para poder corregir un bug, necesitamos reproducirlo.
         * Así, que le pedimos al cliente que nos diga cómo ha sido alguno de los casos en los que ha ocurrido el fallo.
         * Nos cuenta que un usuario se ha quejado de que tenía 2350€ en su cuenta, ha ido a ingresar 7000 y se ha quedado sin saldo.
         * Nuestro primer impulso es ir al código, a la función ingreso, y mirarla para ver si descubrimos el fallo. ¡¡¡Error!!!
         * Para corregir el bug siguiendo TDD hay que seguir la técnica denominada Test Driven Bug Fixing
         * (Corrección de Bugs Guíado por Tests). Esto no es más que hacer lo que hemos estado haciendo durante todo el proyecto
         */
        test('Cuenta: Si ingreso más de 6000 no es Valido. Al ingresar 7000 en Cuenta Con 2350 el saldo se queda 2350', () => {
            // Arrange (set up)
            cuenta.ingresar(2350);
            // Act
            cuenta.ingresar(7000);
            // Asert
            expect(cuenta.getSaldo()).toBe(2350);
        });

    });

    //---------------------RETIRAR
    describe(('TDD Cuenta: Retirar'), () => {
        test('Cuenta: al retirar 100 en cuenta con 500 el saldo es 400', () => {
            // Arrange
            cuenta.ingresar(500);
            expect(cuenta.getSaldo()).toBe(500);
            // Act
            cuenta.retirar(100);
            // Assert
            expect(cuenta.getSaldo()).toBe(400);
        });

        test('Cuenta: al retirar 500 en cuenta con 200 el saldo sigue siendo 200', () => {
            // Arr
            cuenta.ingresar(200);
            expect(cuenta.getSaldo()).toBe(200);
            // Act
            cuenta.retirar(500);
            // Assert
            expect(cuenta.getSaldo()).toBe(200);
        });

        test('Cuenta: al retirar -100 en cuenta con 500 el saldo sigue siendo 500', () => {
            // Arr
            cuenta.ingresar(500);
            expect(cuenta.getSaldo()).toBe(500);
            // Act
            cuenta.retirar(-100);
            // Assert
            expect(cuenta.getSaldo()).toBe(500);
        });

        test('Cuenta: al retirar 100.45 en cuenta con 500 el saldo es 399.55', () => {
            // Arr
            cuenta.ingresar(500);
            expect(cuenta.getSaldo()).toBe(500);
            // Act
            cuenta.retirar(100.45);
            // Assert
            expect(cuenta.getSaldo()).toBe(399.55);
        });

        test('Cuenta: al retirar 100.454 en cuenta con 500 el saldo sigue siendo 500', () => {
            // Arr
            cuenta.ingresar(500);
            expect(cuenta.getSaldo()).toBe(500);
            // Act
            cuenta.retirar(100.454);
            // Assert
            expect(cuenta.getSaldo()).toBe(500);
        });


        test('Cuenta: al retirar 6000 en cuenta con 7000 el saldo es 1000', () => {
            // Arr
            cuenta.ingresar(1000);
            cuenta.ingresar(6000);
            expect(cuenta.getSaldo()).toBe(7000);
            // Act
            cuenta.retirar(6000);
            // Assert
            expect(cuenta.getSaldo()).toBe(1000);
        });

        test('Cuenta: al retirar 6000.01 en cuenta con 7000 el saldo sigue siendo 7000', () => {
            // Arr
            cuenta.ingresar(1000);
            cuenta.ingresar(6000);
            expect(cuenta.getSaldo()).toBe(7000);
            // Act
            cuenta.retirar(6000.01);
            // Assert
            expect(cuenta.getSaldo()).toBe(7000);
        });

    });

    //---------------------TRANSFERENCIAS
    describe('TDD Cuentas: Transferencias', () => {
        test('Cuenta: Transferencias de una cantidad', () => {
            // Arr
            const cuenta1 = new Cuenta();
            cuenta1.ingresar(500);
            expect(cuenta1.getSaldo()).toBe(500);

            const cuenta2 = new Cuenta();
            cuenta2.ingresar(50);
            expect(cuenta2.getSaldo()).toBe(50);

            // Act
            cuenta1.transferencia(cuenta2, 100);

            // Assert
            expect(cuenta1.getSaldo()).toBe(400);
            expect(cuenta2.getSaldo()).toBe(150);
        });

        test('Cuenta: Tranferencia de una cantidad negativa no es válida', () => {
            const cuenta1 = new Cuenta();
            cuenta1.ingresar(500);

            const cuenta2 = new Cuenta();
            cuenta2.ingresar(50);

            cuenta1.transferencia(cuenta2, -100);

            expect(cuenta1.getSaldo()).toBe(500);
            expect(cuenta2.getSaldo()).toBe(50);
        });

        test('Cuenta: Tranferencia de  con limite de 3000', () => {
            const cuenta1 = new Cuenta();
            cuenta1.ingresar(3500);

            const cuenta2 = new Cuenta();
            cuenta2.ingresar(50);

            cuenta1.transferencia(cuenta2, 3000.01);

            expect(cuenta1.getSaldo()).toBe(3500);
            expect(cuenta2.getSaldo()).toBe(50);
        });

        test('Cuenta: Tranferencia No se puede trasmitir más saldo del disponible', () => {
            const cuenta1 = new Cuenta();
            cuenta1.ingresar(2350);

            const cuenta2 = new Cuenta();
            cuenta2.ingresar(300);

            cuenta1.transferencia(cuenta2, 2500);

            expect(cuenta1.getSaldo()).toBe(2350);
            expect(cuenta2.getSaldo()).toBe(300);
        });
    });

});
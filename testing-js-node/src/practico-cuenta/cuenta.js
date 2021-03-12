module.exports = class Cuenta {
    constructor() {
        this.saldo = 0;
    }
    getSaldo() {
        return this.saldo;
    }
    /**
   * Ingresa un saldo
   * @param {number} cantidad
   * Pasa los tests. Ese this.saldo = 0; chirría, debería venir algún test para quitar esa ambigüedad,
   * pero si echamos un vistazo, no lo hay. Deberíamos entonces avisar de que faltan ejemplos en las especificaciones para que sea del todo robusto.
   * ¿Por que no lo programamos bien directamente (al fin y al cabo sabemos cómo debe ser) y nos olvidamos?
   * La respuesta es que si no tenemos una batería de test completa, en el futuro alguien puede hacer cambios en el código,
   * refactorizaciones, etc, y podría volver a introducir el this.saldo = 0;, ejecutar los tests, ver que pasan todos, y dar por bueno ese código.
   * Si aplicamos TDD hay que conseguir una batería de tests que no dejen cabida a la ambigüedad. Esto se consigue con experienca, y sobretodo,
   * sin programar más funcionalidad de la que pida cada test. Voy a dejar este fallo como si no nos hubiéramos dado cuenta. En el futuro,
   * en producción, el cliente lo detectará y tendremos un bug que corregir. Y lo corregiremos siguiendo la técnica TDD.
   */
    ingresar(cantidad) {
        const esValida = this.validarCantidadIngresada(cantidad);
        if (esValida) {
            this.saldo += cantidad;
        }
    }

    validarCantidadIngresada(cantidad) {
        if (cantidad.toFixed(2) != cantidad) {
            return false;
        }
        if (cantidad < 0) {
            return false;
        }
        if (cantidad > 6000.00) {
            return false;
        }
        return true;
    }

    retirar(cantidad) {
        var valido = this.validarCantidadRetirada(cantidad);
        if (valido) {
            this.saldo -= cantidad;
        }
    }

    validarCantidadRetirada(cantidad) {
        if (cantidad > this.saldo) {
            return false;
        } else if (cantidad < 0) {
            return false;
        } else if (cantidad.toFixed(2) != cantidad) {
            return false;
        } else if (cantidad > 6000.00) {
            return false;
        }
        return true;
    }

    /**
 * Realiza una transfrenecia a una cuenta de destino
 * @param {*} cuentaDestino
 * @param {*} cantidad
 */
    transferencia(cuentaDestino, cantidad) {
        const esValida = this.validarCantidadTransferencia(cantidad);
        if (esValida) {
            this.retirar(cantidad);
            cuentaDestino.ingresar(cantidad);
        }
    }

    /**
   * Valida la cantidad para una trasfrerencia
   * @param {*} cantidad
   */
    validarCantidadTransferencia(cantidad) {
        if (cantidad < 0) {
            return false;
        }

        if (cantidad > this.saldo) {
            return false;
        }

        if (cantidad > 3000) {
            return false;
        }

        return true;
    }
}


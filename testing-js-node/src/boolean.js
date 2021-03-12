// Para trabajar con boleanos
/* export const isNull = () => null;
export const isFalse = () => false;
export const isTrue = () => true;
export const isUndefined = () => undefined; */

function isNull() {
    return null;
}
function isFalse() {
    return false;
}
function isTrue() {
    return true;
}
function isUndefined() {
    return undefined;
}
module.exports = {
    isNull,
    isFalse,
    isTrue,
    isUndefined
}

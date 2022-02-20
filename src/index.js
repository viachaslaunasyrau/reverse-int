module.exports = function reverse (n) {
    if(n<0){
        let num = Math.abs(n);
        return Number(num.toString().split('').reverse().join(''))
    }
    return Number(n.toString().split('').reverse().join(''))
}

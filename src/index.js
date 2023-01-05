module.exports = function reverse (n) {
    n = String(n);
    if (n.slice(0, 1) == '-') {
        n = n.substr(1).split('').reverse().join('');
    } else {
        n = n.split('').reverse().join('');
    }

    return n;
}
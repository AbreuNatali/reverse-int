module.exports = function reverse (n) {
    if (n < 0) n = -n;
    const str = n.toString();    
    let j;
    let strRevStart = '';
    let strRevEnd = '';
    let middle = Math.floor((str.length)/2);
        for (let i = 0; i < middle; i++) {
        j = str.length - 1 - i;
        strRevStart = strRevStart + str[j];
        strRevEnd = str[i] + strRevEnd;                
    }
     
    let result = ((str.length % 2) === 0)? Number(strRevStart + strRevEnd) : 
    Number(strRevStart + str[middle] + strRevEnd);
    return (result);
}


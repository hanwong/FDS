// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    
    S = S.replace(/-|\s/g, '');
    
    var phoneNumber;
    var len = parseInt(S.length/3);
    var sArray = [];
    var curr;
    var last;
    
    for( var n = 0 ; n < len ; n++) {
        curr = S.slice((3*n), (3*n + 3));
        sArray.push(curr);
    }
    
    last = S.slice((len*3));
    //console.log('last: ', last.length);
    if (last.length === 1){
        curr = S.slice((len*3 - 3), (len*3 - 1));
        last = S.slice((len*3 - 1));
        sArray.pop();
        sArray.push(curr);
        sArray.push(last);
        //console.log('last: ', sArray);
    } 
    else if (last.length === 0){}
    else {
        sArray.push(last);
    }
    
    phoneNumber = sArray.join('-');
    return phoneNumber;
    
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    var count = 0, 
        n =0, 
        square = 0;
    
    for ( ; n < B ; n++ ){
        square = n*n;
        console.log(square);
        if ( square >= A && square <= B ){
            count++;
        }
        if ( square > B ){
            break;
        }
    }
    
    
    return count;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {

    var sArray = [],
        count = 0,
        curr = 0;
    
    sArray = S.split(/\.|\?|\!/);
    console.log('test: ',sArray);
    
    sArray.forEach(function(sentence, index) {
        sentence = sentence.trim().split(/\s+/);
        count = sentence.length;
        console.log('count: ', count);
        curr = count > curr ? count : curr;
    });
    
    return curr;
}


SELECT 
FROM
WHERE NOT
ORDER BY

function solution(absolutes, signs) {
    let sum = 0;
    for (let i=0; i<signs.length; i++){
        if(signs[i] === false) {
            absolutes[i] = -absolutes[i];
        }
        sum += absolutes[i];
    }
    return sum;
}
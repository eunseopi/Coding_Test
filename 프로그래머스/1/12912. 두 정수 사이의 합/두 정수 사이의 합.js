function solution(a, b) {
    let result = 0;
    if(a<b){
        for(let i = a; i<=b; i++){
            result += i;
        }
    }else if(a===b){
        return a;
    }
    else{
        for(let j = b; j<=a; j++){
            result += j;
        }
    }
    return result;
}
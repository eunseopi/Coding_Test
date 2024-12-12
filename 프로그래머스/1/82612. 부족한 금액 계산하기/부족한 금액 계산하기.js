function solution(price, money, count) {
    let sum = 0;
    let result = 0;
    for(let i = 1; i<=count; i++){
        sum = sum + (price * i);
    }
    if(money > sum){
        return 0;
    }
    return sum - money;
}
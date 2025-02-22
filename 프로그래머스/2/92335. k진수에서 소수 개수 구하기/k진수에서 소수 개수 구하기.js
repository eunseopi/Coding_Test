function solution(n, k) {
    // 1. n -> k진수 변환
    // 2. "0"으로 split
    // 3. 소수 판별
    // 4. 소수 개수 세기
    
    // k 범위 상관 없이 쓸 수 있는 코드
    //let changeN = "";

    //while (n > 0) {
    //changeN = (n % k) + changeN
    //n = Math.floor(n/k);
    //}
    //console.log(changeN || "0");
    
    // k 가 36 까지 되는 코드 
    let changeN = n.toString(k);
    let splitN = changeN.split(0).filter(num => num !== "").map(Number);
    let result = [];
    
    for(let i = 0; i < splitN.length; i++) {
        if(isPrime(splitN[i])) {
            result.push(splitN[i]);
        }
    }
    
    return result.length;
    
}

function isPrime(n) {
    if (n < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // 한 번이라도 나누어 떨어지면 소수가 아님
        }
    }
    
    return true; // 끝까지 나누어 떨어지지 않으면 소수
}
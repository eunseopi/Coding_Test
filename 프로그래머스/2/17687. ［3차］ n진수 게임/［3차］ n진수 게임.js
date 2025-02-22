function solution(n, t, m, p) {
    let number = 0; // 0부터 시작하는 숫자
    let numStr = ""; // 변환된 숫자들을 저장할 문자열
    
    // while 문을 사용하여 필요한 만큼 숫자 생성
    while (numStr.length < t * m) {
        numStr += number.toString(n).toUpperCase(); // n진수 변환 후 문자열에 추가
        number++;
    }
    
    // 튜브가 말해야 할 숫자 선택
    let result = "";
    for (let i = 0; i < t; i++) {
        result += numStr[p - 1 + i * m] // (p-1), (p-1 +m), (p- 1 + 2m)
    }
    
    return result;
}
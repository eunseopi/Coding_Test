function solution(n) {
    let res = String(n).split("").sort().reverse().join("");
    return Number(res);
}
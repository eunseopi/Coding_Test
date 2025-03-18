function solution(my_string) {
    const result = Array(52).fill(0);
    
    for (let i=0; i<my_string.length; i++){
        let inx = my_string.charCodeAt(i);
        if(inx >= 65 && inx <=90) {
            result[inx-65]++;
        } else {
            result[inx-71]++;
        }
    }
    
    return result;
}
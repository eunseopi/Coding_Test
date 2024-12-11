function solution(s){
    let count = s.match(/p/gi)?.length;
    let count2 = s.match(/y/gi)?.length;
    for(let i = 0; i<s.length; i++){
        if(count === count2){
            return true;
        }else{
            return false;
        }
    }
}
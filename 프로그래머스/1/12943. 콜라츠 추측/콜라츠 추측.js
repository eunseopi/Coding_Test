function solution(num) {
    let sum = 0;
    while(num != 1){
        if(num % 2 == 0){
             num = num/2;
        }else{
             num = (num * 3) + 1;
        }
        sum += 1;
    }
        if(sum > 500){
            return -1;
        }else{
            return sum;
        }
        return sum;
    }
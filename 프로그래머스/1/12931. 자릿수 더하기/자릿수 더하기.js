function solution(n)
{
    let changeString = n.toString();
    let changeArr = [...changeString];
    let changeNumber = changeArr.map(Number);
    
    let sum = 0;
    for (let i=0; i<changeNumber.length; i++){
        sum += changeNumber[i];
    }
    return sum;
}
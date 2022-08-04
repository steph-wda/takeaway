//works for nums 1-8, but it gives the wrong result for 9 and 10
//I think I'm on the right track, but I didn't want to take too much time on this 



const canWin = (totalStones) => {
    let stonesLeft
    if(totalStones < 2){ //any amount less than two would be a loss
        return false
        
    }else{ 
            if(totalStones / 5 > 0){ //if 5 goes into the number, subtract 5 and return the oppsite of canWin since this would player two's turn
            stonesLeft = totalStones - 5
            return (!canWin(stonesLeft))
        }else if(totalStones / 3 > 0){//if 3 goes into the number, subtract 3 and return the oppsite of canWin since this would player two's turn
            stonesLeft = totalStones - 3
            return (!canWin(stonesLeft))//if 2 goes into the number, subtract 2 and return the oppsite of canWin since this would player two's turn
        }else if(totalStones / 2 > 0){
            stonesLeft = totalStones - 2
            return (!canWin(stonesLeft))
        
    }  
}
}

console.log(canWin(1)) //correct
console.log(canWin(2)) //correct
console.log(canWin(3)) //correct
console.log(canWin(4)) //correct
console.log(canWin(5)) //correct
console.log(canWin(6)) //correct
console.log(canWin(7))//correct
console.log(canWin(8)) //correct
console.log(canWin(9)) //incorrect - need to spend more time figure out why the result is wrong
console.log(canWin(10)) //incorrect

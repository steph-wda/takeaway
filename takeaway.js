const canWin = (totalStones) => {
    let stonesLeft
    if(totalStones < 2){
        return false
    }else if(totalStones === 2 || totalStones === 3 || totalStones === 5 ){
        return true
        
    }else{
            if(totalStones / 5 > 0){
            stonesLeft = totalStones - 5
            console.log(stonesLeft)
            canWin(stonesLeft)
        }else if(totalStones / 3 > 0){
            
            stonesLeft = totalStones - 3
            console.log(stonesLeft)
            canWin(stonesLeft)  
        }else if(totalStones / 2 > 0){
            stonesLeft = totalStones - 2
            console.log(stonesLeft)
            canWin(stonesLeft) 
        
    }  
}
}

console.log(canWin(6))
function distanceFromHqInBlocks(num){
   if (num<=42) {
       return (42-num)
   } else return (num-42)
}


function distanceFromHqInFeet(num){
    if (num<=42) {
        return ((42-num)*264)
    } else return ((num-42))*264
}

function distanceTravelledInFeet(start, destination){
    if (start<=destination) {
        return ((destination-start)*264)
    } else return ((start-destination))*264
}


function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<400) {
        return 0 
    }
    if (distanceTravelledInFeet(start, destination)<=2000) {
        return ((distanceTravelledInFeet(start, destination)-400)*.02)
    }
    if (distanceTravelledInFeet(start, destination)<2500) {
        return 25
    }
    if (distanceTravelledInFeet(start, destination)>=2500) {
        return 'cannot travel that far'
    }
}
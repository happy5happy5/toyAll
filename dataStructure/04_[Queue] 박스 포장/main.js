function paveBox(boxes) {
    let count = 0;
    let max = 0;
   while (boxes.length > 0) {
     let temp=boxes[0]
     if(boxes[0] <= 0) {
       boxes.shift();
       max ++
     } else {
       max=0;
       boxes = boxes.map(el => el - temp);
     }
     if(max>count)count=max
   }
   return count
 }
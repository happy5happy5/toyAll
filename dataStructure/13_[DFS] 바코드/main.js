function barcode(len) {

    function barcodeChecker(arr){
        let size=1
        while(size+size<=arr.length){
            for(let i=0;i<arr.length-size-size+1;i++){
                if(`${arr.slice(i,i+size)}`===`${arr.slice(i+size,i+size+size)}`)return false  
            }
            size++
        }
        return true
    }
    //'232312'.split('').map(x=>Number(x))
    //  arr=[1, 2, 1, 3, 1, 2, 1, 1]
    //  ascendNum(arr)
  
    function ascendNum(arr){//배열형태의 조건 만족 하지않는 바코드를 +1해주고 조건에 맞는 바코드를 반환한다
        if(barcodeChecker(arr))return arr
        if(arr.slice(-1)[0]!==3){//1더해서 3안넘을때
            arr[arr.length-1]+=1
            if(barcodeChecker(arr))return arr
            else return ascendNum(arr)
        }
        else{//1더해서 3넘을때
            arr.pop()
            arr[arr.length-1]+=1
            arr.push(1)
            ascendNum(arr)
            if(barcodeChecker(arr))return arr
            else ascendNum(arr)
        }
    }
    function barcodeMaker(n){
        let barcode=[1]
        for(i=1;i<n;i++){
            barcode.push(1)
            ascendNum(barcode)
        }
        return barcode
    }  
        return barcodeMaker(len).join('')
  
  }
  
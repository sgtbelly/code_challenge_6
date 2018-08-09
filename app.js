function isNice(arr){
    let finalArray = [];
      for (i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] -1)) {
          finalArray.push('true')
        } else {
          finalArray.push('false')
        }
      }
      console.log(finalArray);
      if(!arr.length) {
        return false;
      }
      if(finalArray.includes('false')) {
        return false;
      } else {
        return true;
      }
      
    }
    
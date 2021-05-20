function checkYuGiOh(num){
    var num;
     if (isNaN(num)==true){
        if (Array.isArray(num)==true){
            console.log("invalid parameter: " + JSON.stringify(num));
            return num;
         } else if (typeof(num)=="object"){
            console.log("invalid paramter: " + JSON.stringify(num));
            return num;
         } else {
            console.log("invalid paramter: " + JSON.stringify(num));
            return num;
         }
     }
     else {
         var val;

         val = create(num);
         function create(n){
            var n;
            var array = [];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                    array.push("yu-gi-oh");
                }else  if (i%2==0 && i%3==0){
                    array.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                    array.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                    array.push("gi-oh");
                } else  if (i%5==0){
                    array.push("oh");
                } else  if (i%3==0){
                    array.push("gi");
                } else  if (i%2==0){
                    array.push("yu");
                } 
                else{
                    array.push(i);
                }
              console.log(array);
            }
            return array;
           }
           return val;
     }}
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");

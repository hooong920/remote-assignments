function count(input) {
    // your code here
    var obj = {};
    input.forEach(function(char){
        if(obj[char])
            obj[char] ++; 
        else
            obj[char] = 1;
        
    })
    return obj;
    }
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    // your code here
    let newArray = input.reduce((total, cur, index) => {
        let hasValue = total.findIndex(current => {
          return current.key === cur.key;
        });
        hasValue === -1 && total.push(cur);
        hasValue !== -1 && (total[hasValue].value = total[hasValue].value + cur.value);
        return total;
      }, []);
    return newArray;
}
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
 console.log(groupByKey(input2));
    
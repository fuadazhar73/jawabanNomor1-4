let a = ["a", "a", "a", "b", "c", "c", "b", "b", "b", "d", "d", "e", "e",
"e"] var result = [{count:1, char:a[0]}] a.slice(1).forEach( (e,i) => {
if(e == a[i]) { result[result.length-1].count++; } else{
result.push({count:1, char: e}); } }); console.log(result)
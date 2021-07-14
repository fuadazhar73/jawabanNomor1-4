let a = ["a", "a", "a", "b", "c", "c", "b", "b", "b", "d", "d", "e", "e", "e"] var result = [[a[0]]]
a.slice(1).forEach( (e,i) => { if(e == a[i]) { result[result.length-1].push(e); } else{ result.push([e]); }
}); console.log(result)


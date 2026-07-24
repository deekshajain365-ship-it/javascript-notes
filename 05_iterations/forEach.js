
const coding = [ "js", "cpp", "java", "python","rust"]
coding.forEach( function (element){
    // console.log(element);
})
// forEach -> need callbackfunction (do not have any name)
coding.forEach( (val)=> {
    console.log(val);
})


function printme(item) {
   // console.log(item);
}

///-o/p for all three loop
// js
// cpp
// java
// python
// rust


coding.forEach(printme)  // pass reference of function 

coding.forEach( (item , index, arr)=> {
    console.log(item , index, arr)
})
// js 0 [ 'js', 'cpp', 'java', 'python', 'rust' ]
// cpp 1 [ 'js', 'cpp', 'java', 'python', 'rust' ]
// java 2 [ 'js', 'cpp', 'java', 'python', 'rust' ]
// python 3 [ 'js', 'cpp', 'java', 'python', 'rust' ]
// rust 4 [ 'js', 'cpp', 'java', 'python', 'rust' ]


//-----------------------------------------

const mycoding = [ 
    {
        langName : "javascript",
        langFile : "js"
    },
     {
        langName : "c plus plus",
        langFile : "cpp"
    },
     {
        langName : "python",
        langFile : "py"
    }
]

mycoding.forEach((item)=>{
console.log(item.langName);
})
// javascript
// c plus plus
// python
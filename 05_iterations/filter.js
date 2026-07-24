const coding = [ "js", "cpp", "java", "python","rust"]

const val = coding.forEach((item)=> {
   // console.log(item);  
      /// return item 
})                               // js cpp java python rust

//console.log(val);// undefined , for each loop does not return anything even after using 'return'


//----------------FILTER OPERATION--(it reurns)------------------
// ARROW FUNCTION CAN BE DEFFINED AS ()=>{} , ()=>() ,()=> 

const mynums = [ 1,2,3,4,5,6,7,8,9,10]
 
const urnums = mynums.filter( (num)=> num>4)
//console.log(urnums);  // [ 5, 6, 7, 8, 9, 10 ]  ; only true values passed

const theirnums = mynums.filter( (nums)=>{   // using braces, explicitly return else get u []    
    return nums>4; // [ 5, 6, 7, 8, 9, 10 ] 

})
//console.log(theirnums);


const newnums = []
mynums.forEach( (nums)=> {
    if(nums>4){
        newnums.push(nums)
    }
})
//console.log(newnums) //[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk)=> bk.genre == 'History')
  userbooks = books.filter( (bk)=>{
    return bk.publish >=1995 && bk.genre == 'History'
})
  console.log(userbooks)


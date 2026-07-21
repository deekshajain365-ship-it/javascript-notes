//IIFE : immediately invoked function expression

//  in JavaScript primarily to create an isolated local scope
//  that executes code immediately without polluting the global namespace.

// Data Privacy: Variables declared inside an IIFE cannot be accessed from the outside.
// Avoiding Global Pollution: It prevents variables from accidentally overwriting existing global variables.
// Execution Isolation: Ideal for one-time setup logic like initializing database connections or third-party libraries.

// (body)(execution)

(function chai(){
    // named IIFE
    
    console.log('DB connected');
}) () ;  //use semicolon

//JavaScript never automatically inserts a semicolon if the next line starts with an opening parenthesis (

((name)=>{
     console.log('DB CONNECTED 2',name)
} 
)('psyduck')
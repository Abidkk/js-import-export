console.log('Hello  js import & Export module "THIS IS THE FILE_01');


/// I am exporting variable from FILE-01 to FILE-02
export let city: string = 'Karachi'


// Here I am exporting an Array from FILE-01 to FILE-02 :
export let fruits  :string [] = ['Apple','Orange', 'Banana','Grapes','Peach'];



// Now I am exporting a function from FILE-01 to FILE-02 :
export function call(){
    console.log('hello This is a function')
}

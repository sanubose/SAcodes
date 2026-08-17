
class Stack{
       constructor(){
        this.items = []
       }

    push(element){
           this.items.push(element);
    }
    pop(){
       if(this.items.size ==0){
        console.log("empty");
        return null
       }
       let x = this.items.pop();
       return x;
    }
    peek(){
        if(this.items.size ==0){
            console.log("empty");
            return null
           }
             
    }

    isEmplty(){
        
    }
    size(){

    }
    print(){

    }
}


const Stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()

import Buttonn from "../component/buttonn";

export  default function Array(){
    const array = [ 2 ,7 ,9, 22,44,5,1];
     

    return(
<> {array.filter((num)=><Buttonn Label={num%2 ==0}/>)

} 
</>
    );
}



 import { use, useEffect } from "react";
 import { useState } from "react";

function useEffectExample2() {

    const [count, setCount] = useState(0);

    const [flag, setFlag] = useState(false);
    
    async function download() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    
            console.log(response);
    
            const result = await response.json();
    
            console.log(result);
        }
    
        useEffect(() => {

            download();
        }, [count]); // empty dependency array means this effect runs once on mount

        useEffect(() => {
            console.log("Flag value changed:", flag);
        }, [flag]); // runs when 'flag' changes   

        useEffect(() => {
            console.log("Component mounted");   
        }, []); // runs once on mount
        
        //now on both change of count and flag
        useEffect(() => {
            console.log("Count or Flag changed:", count, flag);
        }, [count, flag]);

        


    return(
        <>
           <h1>useEffect example 2 </h1>
           {count}

           <br />
           <button onClick={() => setCount(count + 1)}>Increment</button>

           <br />

            {flag ? <h2>Flag is TRUE</h2> : <h2>Flag is FALSE</h2> }
            <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
        </>
    )

}

export default useEffectExample2;

//
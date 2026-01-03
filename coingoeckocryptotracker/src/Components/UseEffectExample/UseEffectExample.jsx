import { useEffect } from "react";

function UseEffectExample() {

    async function download() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        console.log(response);

        const result = await response.json();

        console.log(result);
    }

    useEffect(() => {
        //because the dependency array is empty, this will run only once when the component mounts
        download();
    }, []);


  return(
    <>
      <h1>coin table</h1>
    </>
  )

}
export default UseEffectExample;




// useEffect example component to demonstrate how to use useEffect to fetch data when the component mounts
//what is happening here?
//1. we define an async function download that fetches data from an API and logs the response and result to the console
//2. we use the useEffect hook to call the download function when the component mounts
//3. the dependency array is empty, so the effect runs only once when the component mounts

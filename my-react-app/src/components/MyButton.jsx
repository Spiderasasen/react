import {useState} from 'react'

function MyButton({button_text}){
    //use states
    const [count, setCount] = useState(0);

    //main functions
    function handelClick(){
        setCount(count + 1);
    }


    //the html code
    return(
        <button onClick={handelClick}>{button_text} - {count}</button>
    );
}
export default MyButton;

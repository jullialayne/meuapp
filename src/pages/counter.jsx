import React,{useState,useEffect} from 'react';
import '../style/style.css';

export default function Counter() { 
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2.00*value;
    },[value])

    function down(){
        if(value>0){
            setValue(value-1)
        } 
        if(value<=1){
            setButtonStyle('counter-button-minus-desactive')
        }
        
    }
    function up(){
        setValue(value+1)
        if(value>=0){
            setButtonStyle('counter-button-minus-active')
        }
    }
    return (
        <>
            <div className='countex-wrapper'> 
                <button 
                    className={buttonStyle}
                    onClick={down}
                >-</button>
                <p>{value}</p>
                <button 
                    className='counter-button-plus-active'
                    onClick={up}
                >+</button>
            </div>
            <label id="moeda" className='countex-wrapper'>12,00</label>
        </>
    )
} 
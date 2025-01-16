import { useState , useRef , React } from 'react'
import CalcKeys from './components/CalcKeys'

const App = () => {

  const [inputVal , setInputVal] = useState("");

  const inputCheck = (e) =>{
    const allowedKeys = /[0-9+\-*/().]/;
    if(!allowedKeys.test(e.key) && e.key!="Backspace" && e.key!="Delete" && e.key!="ArrowLeft" && e.key!="ArrowRight"){
      if(e.key==="Enter"){
        submit();
      }
      e.preventDefault();
    }  
  };

  const submit =()=>{
    setInputVal(eval((inputVal)));
  };


  return (
    <div className='h-screen w-screen bg-slate-900 grid place-content-center'>
        <div className='border-4 border-gray-500 flex flex-col p-2 gap-2  '>
            <div>
              <input onKeyDown={inputCheck} value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} className=' text-yellow-500 text-right w-full h-[80px] px-2 text-3xl font-semibold' type="text"  />
            </div>

            <div className='grid grid-cols-5 gap-2'>
              <CalcKeys calcKey="7" onclick={()=>{setInputVal(inputVal+7)}} />
              <CalcKeys calcKey="8" onclick={()=>{setInputVal(inputVal+8)}} />
              <CalcKeys calcKey="9" onclick={()=>{setInputVal(inputVal+9)}} />
              <CalcKeys calcKey="DEL" onclick={()=>{setInputVal(inputVal.slice(0,-1))}} />
              <CalcKeys calcKey="AC" onclick={()=>{setInputVal("")}} />
              <CalcKeys calcKey="4" onclick={()=>{setInputVal(inputVal+4); console.log(inputVal)}}/>
              <CalcKeys calcKey="5" onclick={()=>{setInputVal(inputVal+5)}}/>
              <CalcKeys calcKey="6" onclick={()=>{setInputVal(inputVal+6)}}/>
              <CalcKeys calcKey="x" onclick={()=>{setInputVal(`${inputVal}*`)}}/>
              <CalcKeys calcKey="/" onclick={()=>{setInputVal(inputVal+"/")}}/>
              <CalcKeys calcKey="1" onclick={()=>{setInputVal(inputVal+1)}}/>
              <CalcKeys calcKey="2" onclick={()=>{setInputVal(inputVal+2)}}/>
              <CalcKeys calcKey="3" onclick={()=>{setInputVal(inputVal+3)}}/>
              <CalcKeys calcKey="+" onclick={()=>{setInputVal(inputVal+"+")}}/>
              <CalcKeys calcKey="-" onclick={()=>{setInputVal(inputVal+"-")}}/>
              <CalcKeys calcKey="0" onclick={()=>{setInputVal(inputVal+0)}}/>
              <CalcKeys calcKey="." onclick={()=>{setInputVal(inputVal+".")}}/>
              <CalcKeys calcKey="(" onclick={()=>{setInputVal(inputVal+"(")}}/>
              <CalcKeys calcKey=")" onclick={()=>{setInputVal(inputVal+")")}}/>
              <CalcKeys calcKey="=" onclick={submit}/>
            </div>
        </div>
    </div>
  )
}

export default App

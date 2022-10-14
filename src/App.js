
import './App.css';
import React,{useState} from 'react';
import {useForm} from "react-hook-form";
function App() {
  const {register, handleSubmit}=useForm();
  
  const [horoscope, setHoroscope]=useState("");
  const [name,setName]=useState("");
  const before90s=Date.parse("1990-01-01");
  const decade20=Date.parse("2000-01-01");
  const decade21=Date.parse("2020-01-01");
  const decade22=Date.parse("2030-01-01");


  const onSubmit=(data)=>{
    console.log(data.date)
    const current=Date.parse(data.date);
    setName(data.first_name)
    if(current<=before90s){
setHoroscope("1980s year of the Monkey, You are intelligent, resourceful, innovative and talented. You  have outstanding eloquence and strong desire for expressing yourself")

    }
    else if(current<=decade20){
      setHoroscope("People born with Nineties birthdays are astrology fans for a reason: you are currently going through the most challenging but potentially rewarding cycle in over 240 years. It’s the Pluto in Capricorn cycle and no matter what your regular Sun Sign/Zodiac Sign is, you’re feeling it")
      
    }
    else if(current<=decade21){
      setHoroscope("For people with Chinese zodiac Dragon sign (born in the 200s). You financial situation is stabl, as long as you are willing to work hard it will rise steadily. You should listen to people offering advice. A few unlucky stars on an elderly or you, do regular physical examinations to be prepared") 
      
    }
else if(current<=decade22){
setHoroscope("You are intellectual, a visionary, thorough in its thought process and unwilling to abide by the laws of the group for the sheer sake of fitting in. You will have the urge to buck a system only once it has understood it and thought through the best way to break it.")

}
else{
  setHoroscope("Wealth is coming your way")
}
  }
       
    
  
  return (
    <div className="App">
        <div className=" bg-orange-500 flex flex-row">
                <div className=" grid h-screen place-items-center bg-orange-200 w-1/2">
                    <div  className="space-y-6">
                        <h1 className="italic text-3xl font-serif hover:font-sans font-semibold text-center">Get that horoscope reading!</h1>
                    
                    <p className="text-2xl -tracking-12 text-center hey">Are you ready to meet <br/> your future? Let's go!</p>
                    <p className="italic font-extrabold text-center text-sm border-2 border-orange-800 "> {name}<br/> <q>{horoscope}</q> </p>
                    </div>
                    
                  
                    <form className="w-full ml-32" onSubmit={handleSubmit(onSubmit)}>
                      
                        
                             <div className="relative z-0 mb-6">
                                
<input type="text" name="first_name"  {...register('first_name')} className="w-4/5 block text-gray-700 italic bg-transparent border-0 border-b-2 border-orange-300  appearance-none dark:text-gray-700 dark:border-orange-300 focus:outline-none focus:ring-0 focus:border-orange-500 peer"/>   
                              


                        
                                <label htmlFor="first_name" className="peer-focus:font-medium relative text-medium text-yellow-500 dark:text-orange-700 duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yelloe-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                          

                   
                        
                       <div>
                        <input type="date" name="date" id="date" className="w-4/5 block text-gray-700 italic bg-transparent border-0 border-b-2 border-orange-300  appearance-none dark:text-gray-400 dark:border-orange-300 focus:outline-none focus:ring-0 focus:border-orange-500 peer" {...register('date',{required:true})}/>
                        <label htmlFor="date" className="peer-focus:font-medium relative text-sm text-yellow-600 dark:text-orange-800 duration-300 tranform -translate-y-6 scale-75 peer-focus:dark:text-orange-500">DOB</label>
      
                       </div>
                       
                        
        <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-2/5 ml-24 mt-6">Submit</button>
                      </form>
                </div>
                <div className="w-1/2">
                    <img src="./images/Palm reading-pana.svg" alt=""/>
                </div>
            </div>
       
    </div>
  );
}

export default App;

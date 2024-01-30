import { useState } from "react"
import PasswordLength from "./Components/PasswordLength"
import IncludeUppervase from "./Components/IncludeUppervase"
import IncludeLowercases from "./Components/IncludeLowercases"
import IncludeNumbers from "./Components/IncludeNumbers"
import IncludeSymbols from "./Components/IncludeSymbols"
import { generatePassword } from "./Password"
import { AiOutlineCopy } from 'react-icons/ai'


function App() {
  const [password,setPassword] = useState<string|null>(null)
  const [passwordLength,SetPasswordLength] = useState<number>(4)
  const [includeUpperCase,SetIncludeUpperCase] = useState<boolean>(true)
  const [includeLowerCase,SetIncludeLowerCase] = useState<boolean>(true)
  const [includeNumbers,SetIncludeNumbers] = useState<boolean>(true)
  const [includeSymbols,SetIncludeSymbols] = useState<boolean>(false)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  function handleGeneratePassword(){
    const newPassword = generatePassword({
      length:passwordLength,
      includeLowerCase,
      includeUpperCase,
      includeNumbers,
      includeSymbols
    });
    setPassword(newPassword)

  }
  function handleCopy(){
    if(password){
      navigator.clipboard.writeText(password)
    }
  }


 


  return (
    <>
      <div
        onPointerMove={(e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        }}
        className='gela'
        style={{ position: 'relative' }} 
      >
     <div className="font-fontfamily flex flex-col gap-4 justify-center items-center
     min-h-screen bg-black text-white">
      <h1 className="xl:text-[40px] font-fontFamily">Giorgi Bachidze</h1>
      {password && 
      <div className="bg-[#18171F] text-white px-4 py-2 break-all
       flex justify-between items-center w-[320px] mb-4 xl:w-[600px] xl:h-[50px]">
        <div className="text-xl">{password}</div>
        <button className="text-xl" onClick={handleCopy}><AiOutlineCopy/></button>
      </div>
      }
      <div className="w-[320px] bg-[#24232C dark:bg-#A4FFAF] p-4 gap-2 xl:w-[600px] xl:h-[410px]">
        <PasswordLength 
        passwordLength={passwordLength}
        setPasswordLength = {SetPasswordLength}
        />
        <IncludeUppervase 
        includeUppercase = {includeUpperCase}
        setIncludeUppercase = {SetIncludeUpperCase}
        />
        <IncludeLowercases
        includeLowerCase = {includeLowerCase}
        SetIncludeLowerCase = {SetIncludeLowerCase}
        />

        <IncludeNumbers
        includeNumbers = {includeNumbers}
        SetIncludeNumbers = {SetIncludeNumbers}
        />

        <IncludeSymbols
        includeSymbols = {includeSymbols}
        SetIncludeSymbols = {SetIncludeSymbols}
        />

        <button onClick={handleGeneratePassword} className="
        px-4 py-4 bg-[#A4FFAF] rounded-md shadow-md w-full
        border text-black border-solid hover:border-#A4FFAF
      hover:text-[#A4FFAF] hover:bg-[#18171F] transition-all   duration-300 uppercase font-fontFamily xl:mt-[25px]">
          Generate
          </button>
      </div>
     </div>
     <div
     
          style={{
            position: 'fixed',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'transparent', 
            border: '2px solid #A4FFAF',
            transform: 'translate(-50%, -50%)',
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none', 
            zIndex: 9999, 
            transition:'0.1s'
          }}
        ></div>
      </div>
    </>
  )
}

export default App

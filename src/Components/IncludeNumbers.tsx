type PasswordNumberProps = {
  includeNumbers : boolean
  SetIncludeNumbers: (length:boolean) => void
}

const IncludeNumbers = ({includeNumbers,SetIncludeNumbers}:PasswordNumberProps) => {
  function handleIncludeNumberChange(){
    SetIncludeNumbers(!includeNumbers)
  }
return (
  <div className="mb-2 xl:pt-[12px]">
      <input 
      type="checkbox"
      id='includeNumbers' 
      checked={includeNumbers}
      className="mr-2"
      onChange={handleIncludeNumberChange}
      />
      <label className="xl:text-[25px] font-fontFamily" htmlFor="includeNumbers">
          Include Number Letters
      </label>
  </div>
)
}

export default IncludeNumbers
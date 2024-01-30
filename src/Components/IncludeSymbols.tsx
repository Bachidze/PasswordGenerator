type PasswordSymbolProps = {
  includeSymbols : boolean
  SetIncludeSymbols: (length:boolean) => void
}

const IncludeSymbols = ({includeSymbols,SetIncludeSymbols}:PasswordSymbolProps) => {
  function handleIncludeSymbolChange(){
    SetIncludeSymbols(!includeSymbols)
  }
return (
  <div className="mb-2 xl:pt-[12px]">
      <input 
      type="checkbox"
      id='includeSymbols' 
      checked={includeSymbols}
      className="mr-2"
      onChange={handleIncludeSymbolChange}
      />
      <label className="xl:text-[25px] font-fontFamily" htmlFor="includeSymbols">
          Include Symbol Letters
      </label>
  </div>
)
}
export default IncludeSymbols
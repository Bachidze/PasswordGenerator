

type IncludeLowerCaseProps = {
  includeLowerCase : boolean
  SetIncludeLowerCase: (include:boolean) => void
}

const IncludeLowercases = ({includeLowerCase,SetIncludeLowerCase}:IncludeLowerCaseProps) => {
  function handleIncludeLowercaseChange(){
    SetIncludeLowerCase(!includeLowerCase)
  }
return (
  <div className="mb-2 xl:pt-[12px]">
      <input 
      type="checkbox"
      id='includeLowercase' 
      checked={includeLowerCase}
      className="mr-2"
      onChange={handleIncludeLowercaseChange}
      />
      <label className="xl:text-[25px]" htmlFor="includeLowercase">
          Include Lowercase Letters
      </label>
  </div>
)
}

export default IncludeLowercases
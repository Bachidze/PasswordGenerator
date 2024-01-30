

type IncludeLowerCaseProps = {
  includeLowerCase : boolean
  SetIncludeLowerCase: (include:boolean) => void
}

const IncludeLowercases = ({includeLowerCase,SetIncludeLowerCase}:IncludeLowerCaseProps) => {
  function handleIncludeLowercaseChange(){
    SetIncludeLowerCase(!includeLowerCase)
  }
return (
  <div className="mb-2">
      <input 
      type="checkbox"
      id='includeLowercase' 
      checked={includeLowerCase}
      className="mr-2"
      onChange={handleIncludeLowercaseChange}
      />
      <label htmlFor="includeLowercase">
          Include Lowercase Letters
      </label>
  </div>
)
}

export default IncludeLowercases
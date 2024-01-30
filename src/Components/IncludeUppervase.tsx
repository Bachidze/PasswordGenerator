import { ChangeEvent } from "react"

type IncludeUpperCaseProps = {
    includeUppercase : boolean
    setIncludeUppercase: (include:boolean) => void
  }

const IncludeUppervase = ({includeUppercase,setIncludeUppercase}:IncludeUpperCaseProps) => {
    function handleIncludeUppercaseChange (e:ChangeEvent<HTMLInputElement>){
        setIncludeUppercase(!includeUppercase)
    }
  return (
    <div className="mb-2">
        <input type="checkbox" id='includeUppercase' 
        checked={includeUppercase}
        className="mr-2"
        onChange={handleIncludeUppercaseChange}
        />
        <label htmlFor="includeUppercase">
            Include Uppercase Letters
        </label>
    </div>
  )
}

export default IncludeUppervase
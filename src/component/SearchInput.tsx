import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { HtmlHTMLAttributes, useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface props{
  onsearch:(search: string)=>void
}
const SearchInput = ( {onsearch}: props) => {
  const ref=useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if(ref.current) 
      onsearch(ref.current.value)
      console.log(ref.current?.value)
      
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>} />
        <Input
        ref={ref}
          borderRadius={20}
          variant="filled"
          placeholder="Search games.."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

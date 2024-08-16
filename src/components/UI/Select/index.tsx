import { StyledSelect } from "./styles";

type SelectProps = {
  value?: string, 
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]
};

const Select= ({ options, value, onChange, ...props }: SelectProps) => {
    return (
        <StyledSelect value={value} onChange={onChange} {...props}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      );
};

export default Select;

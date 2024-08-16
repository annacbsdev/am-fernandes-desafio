
import { StyledTextField } from './styles';

type TextFieldProps = {
  placeholder: string,
  value?: string, 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField= ({ placeholder, ...rest }: TextFieldProps) => {
  return (
    <StyledTextField type="text" placeholder={placeholder} {...rest} />
  );
};

export default TextField;

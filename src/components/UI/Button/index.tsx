import * as S  from './styles'

// componente botão com 3 estilos diferentes
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {

  const ButtonComponent = {
    primary: S.PrimaryButton,
    secondary: S.SecondaryButton,
    text: S.TextButton
  }[variant];

  return (
    <ButtonComponent {...props}>
      {children}
    </ButtonComponent>
  );
};

export default Button;

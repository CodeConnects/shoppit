import './Button.scss';

const buttonClass = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  tertiary: 'button-tertiary'
}

const Button = ({ children, buttonStyle, ...otherProps }) => {
  return (
    <button className={`button-wrap ${buttonClass[buttonStyle]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
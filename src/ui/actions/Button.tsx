import { ReactNode } from 'react';

interface Props {
  disabledStyles?: string;
  enableStyles?: string;
  onClick: () => void;
  disabled?: boolean;
  styles?: string;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  disabled,
  onClick,
  styles,
  disabledStyles,
  enableStyles,
  children,
}) => {
  return (
    <button
      className={`px-10 py-2 rounded-lg shadow-md text-white font-semibold ${
        disabled ? disabledStyles : enableStyles
      } ${styles}`}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex items-center">{children}</div>
    </button>
  );
};

export default Button;

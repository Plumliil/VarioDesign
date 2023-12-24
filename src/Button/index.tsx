import classNames from 'classnames';
import React, { memo } from 'react';
import './styles/index.less'; // 引入样式
export interface ButtonProps {
  type?: 'primary' | 'default' | 'link' | 'text';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: '#BC2866';
  danger?: boolean;
  size?: 'large' | 'mid' | 'small';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'mid',
  children,
  onClick,
  disabled = false,
  danger = false,
  style = {},
  ...rest
}) => {
  const varioButtonCss = classNames('vario-btn', {
    // 'button-loading': innerLoading,
    link: type === 'link',
    text: type === 'text',
    middle: size === 'mid',
    small: size === 'small',
    large: size === 'large',
    primary: type === 'primary',
    default: type === 'default',
    danger: danger,
    disabled: disabled,
    'link-danger': type === 'link' && danger,
  });
  const varioButtonStyles = disabled
    ? {
        color: '#B8B8CC',
        backgroundColor: `${type === 'link' ? 'none' : '#F5F5F5'}`,
        border: '1px solid transparent',
        cursor: 'not-allowed',
        ...style,
      }
    : { ...style };
  return (
    <button
      type="button"
      className={varioButtonCss}
      disabled={disabled}
      onClick={onClick}
      {...rest}
      style={varioButtonStyles}
    >
      {children}
    </button>
  );
};

export default memo(Button);

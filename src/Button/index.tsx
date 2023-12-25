// import classNames from 'classnames';
// import React, { memo } from 'react';
// import './styles/index.less'; // 引入样式
// export interface ButtonProps {
//   type?: 'primary' | 'default' | 'link' | 'text';
//   children?: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   disabled?: boolean;
//   color?: '#BC2866';
//   danger?: boolean;
//   size?: 'large' | 'mid' | 'small';
//   radius?: boolean,
//   style?: React.CSSProperties;
//   shape?: 'round' | 'circle' | 'default'
// }

// const Button: React.FC<ButtonProps> = ({
//   type = 'default',
//   size = 'default',
//   children,
//   onClick,
//   disabled = false,
//   danger = false,
//   style = {},
//   radius = false,
//   shape = 'default',
//   ...rest
// }) => {
//   const varioButtonCss = classNames('vario-btn', {
//     // 'button-loading': innerLoading,
//     link: type === 'link',
//     text: type === 'text',
//     middle: size === 'default',
//     small: size === 'small',
//     large: size === 'large',
//     primary: type === 'primary',
//     default: type === 'default',
//     radius: radius,
//     danger: danger,
//     disabled: disabled,
//     round: shape === 'round',
//     circle: shape === 'circle',
//     'link-danger': type === 'link' && danger,
//   });
//   const varioButtonStyles = disabled
//     ? {
//       color: '#B8B8CC',
//       backgroundColor: `${type === 'link' ? 'none' : '#F5F5F5'}`,
//       border: '1px solid transparent',
//       cursor: 'not-allowed',
//       ...style,
//     }
//     : { ...style };
//   return (
//     <button
//       type="button"
//       className={varioButtonCss}
//       disabled={disabled}
//       onClick={onClick}
//       {...rest}
//       style={varioButtonStyles}
//     >
//       {children ?
//         shape === 'circle' && typeof children === 'string'
//           ?
//           children?.slice(0, 1)
//           :
//           children
//         : children}
//     </button>
//   );
// };

// export default memo(Button);

import Button from './Button';
import './styles/index.less';
// import ButtonGroup from './ButtonGroup';

// Button.Group = ButtonGroup;

// export { ButtonGroup };
export default Button;

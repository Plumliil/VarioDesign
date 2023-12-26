import classNames from 'classnames';
import * as React from 'react';
import { ConfigConsumer, ConfigConsumerProps } from '../../config-provider';
import ButtonGroup from './ButtonGroup';
export type TypeMaps = 'main' | 'secondary' | 'link';
export type ColorMaps = 'normal' | 'orange' | 'danger';
export type SizeMaps = 'small' | 'middle' | 'large';
export type StateMaps = 'normal' | 'danger' | 'warning' | 'info' | 'success';

export interface BaseButtonHocProps {
  prefixCls?: string;
  className?: string;
  size?: SizeMaps;
  type?: TypeMaps;
  state?: StateMaps;
  color?: ColorMaps;
  ghost?: boolean;
  block?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// 这个高阶组件的作用是接受一个组件作为参数，然后返回一个新的组件，
// 这个新的组件会在原有组件的基础上进行包装（或者说增强），
// 在这个例子中，包装的部分是使用 React.Fragment 包裹传入的 WrapperComponent。
// 这种模式可以用于在不修改原有组件代码的情况下，增加一些共用的逻辑或样式。

const BaseButtonHoc = <P extends object>(
  WrapperComponent: React.ComponentType<P>,
) => {
  return class extends React.Component<P & BaseButtonHocProps> {
    static Group: typeof ButtonGroup;
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(
      props: (P & BaseButtonHocProps) | Readonly<P & BaseButtonHocProps>,
    ) {
      super(props);
    }
    handleClick = () => {
      const { disabled, onClick } = this.props;
      if (!disabled && onClick) {
        onClick();
      }
    };
    renderButtonComponent = ({ getPrefixCls }: ConfigConsumerProps) => {
      const {
        prefixCls: customizePrefixCls,
        className,
        size = 'middle',
        type = 'main',
        // color = 'normal',
        state = 'normal',
        ghost = false,
        block = false,
        style,
        disabled = false,
      } = this.props;
      const prefixCls = getPrefixCls('button', customizePrefixCls);
      // 样式规则 style > disabled > antiWhite > ghost > color
      const classString = classNames(prefixCls, className, {
        [`${prefixCls}-${size}`]: true,
        // [`${prefixCls}-${color}`]: true,
        [`${prefixCls}-${state}`]: true,
        [`${prefixCls}-${type}`]: true,
        // [`${prefixCls}-${color}`]: true,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-ghost`]: ghost,
        // [`${prefixCls}-ghost-${color}`]: !!color && ghost,
        [`${prefixCls}-${type}-${state}`]: !!state && !!type,
        [`${prefixCls}-ghost-${state}`]: !!state && ghost,
        [`${prefixCls}-disabled`]: disabled,
        // [`${prefixCls}-disabled-${color}`]: disabled && !!color, // 主题色按钮的禁止
        [`${prefixCls}-disabled-${state}`]: disabled && !!state, // 主题色按钮的禁止
        [`${prefixCls}-disabled-ghost`]: disabled && ghost, // 幽灵按钮的禁止
      });
      const cssStyle: React.CSSProperties = style
        ? { ...style, lineHeight: style && style.height }
        : {};
      return (
        <div
          style={cssStyle}
          className={classString}
          onClick={this.handleClick}
        >
          <WrapperComponent {...this.props} />
        </div>
      );
    };
    render() {
      return <ConfigConsumer>{this.renderButtonComponent}</ConfigConsumer>;
    }
  };
};

export default BaseButtonHoc;

import * as React from 'react';
// import type { ButtonProps } from '../button';

export const defaultIconPrefixCls = 'anticon';

export interface Theme {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}

export interface CSPConfig {
  nonce?: string;
}

export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface ComponentStyleConfig {
  className?: string;
  style?: React.CSSProperties;
}

// export interface ButtonConfig extends ComponentStyleConfig {
//   classNames?: ButtonProps['classNames'];
//   styles?: ButtonProps['styles'];
// }

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  pagination?: ComponentStyleConfig & { showSizeChanger?: boolean };
  pageHeader?: {
    ghost: boolean;
  };
  direction?: DirectionType;
  virtual?: boolean;
  popupMatchSelectWidth?: boolean;
  // button?: ButtonConfig;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `vario-${suffixCls}` : 'vario';
};

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls,
});

export const { Consumer: ConfigConsumer } = ConfigContext;

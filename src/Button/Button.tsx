/**
 * @desc Button
 * @author {pengdaokuan}
 */
import * as React from 'react';
import BaseButtonHOC from './BaseButtonHoc';

export interface ButtonProps {
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default BaseButtonHOC(Button);

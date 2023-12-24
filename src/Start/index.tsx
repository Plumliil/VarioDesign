import React, { type FC } from 'react';

const Start: FC<{ title: string }> = (props) => {
  return <button type='button'>{props.title}</button>
};

export default Start;

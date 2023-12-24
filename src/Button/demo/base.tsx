import React from 'react';
import { Button } from 'vario-design';

const App: React.FC = () => {
  return (
    <>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button danger>危险按钮</Button>
      <br />
      <Button type="primary" disabled>
        禁用按钮
      </Button>
      <br />
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
      <Button type="link" danger>
        Danger Link
      </Button>
    </>
  );
};

export default App;

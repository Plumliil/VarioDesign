import React from 'react';
import { Button } from 'vario-design';

const App: React.FC = () => {
  return (
    <>
      <Button type="main">默认按钮</Button>
      <Button type="main" state="success">
        默认按钮
      </Button>
      <Button type="main" state="info">
        默认按钮
      </Button>
      <Button type="main" state="warning">
        警告按钮
      </Button>
      <Button type="main" state="danger">
        危险按钮
      </Button>
      <br />
      <br />
      <div
        style={{
          backgroundColor: 'black',
        }}
      >
        <Button type="main" ghost>
          幽灵按钮
        </Button>
        <Button type="main" state="success" ghost>
          幽灵按钮
        </Button>
        <Button type="main" state="info" ghost>
          幽灵按钮
        </Button>
        <Button type="main" state="warning" ghost>
          幽灵按钮
        </Button>
        <Button type="main" state="danger" ghost>
          幽灵按钮
        </Button>
      </div>
      <br />
      <Button type="main" disabled>
        禁用按钮
      </Button>
      <Button type="main" state="success" disabled>
        禁用按钮
      </Button>
      <Button type="main" state="info" disabled>
        禁用按钮
      </Button>
      <Button type="main" state="warning" disabled>
        禁用按钮
      </Button>
      <Button type="main" state="danger" disabled>
        禁用按钮
      </Button>
      <Button type="main" state="danger" disabled ghost>
        禁用按钮
      </Button>
      <br />
      <br />
      <Button type="link">Link</Button>
      <Button type="link" state="success">
        Link
      </Button>
      <Button type="link" state="info">
        Link
      </Button>
      <Button type="link" state="warning">
        Link
      </Button>
      <Button type="link" state="danger">
        Link
      </Button>
      <Button type="link" state="danger">
        Link
      </Button>
      <br />
      <Button type="main" size="small">
        默认按钮
      </Button>
      <br />
      <Button type="main" size="middle">
        默认按钮
      </Button>
      <br />
      <Button type="main" size="large">
        默认按钮
      </Button>
      <br />
      <br />
    </>
  );
};

export default App;

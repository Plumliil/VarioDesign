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
        信息按钮
      </Button>
      <Button type="main" state="warning">
        警告按钮
      </Button>
      <Button type="main" state="danger">
        危险按钮
      </Button>
      <br />
      <br />
      <Button type="secondary">默认按钮</Button>
      <Button type="secondary" state="success">
        默认按钮
      </Button>
      <Button type="secondary" state="info">
        信息按钮
      </Button>
      <Button type="secondary" state="warning">
        警告按钮
      </Button>
      <Button type="secondary" state="danger">
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
      <Button type="main" disabled ghost>
        {' '}
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
      <br />
      <br />
      <Button type="main" shape="round" size="small">
        默认按钮
      </Button>
      &nbsp;&nbsp;
      <Button type="main" shape="round">
        默认按钮
      </Button>
      &nbsp;&nbsp;
      <Button type="main" shape="round" size="large">
        默认按钮
      </Button>
      &nbsp;&nbsp;
      <br />
      <br />
      <Button type="main" shape="circle" size="small">
        默认
      </Button>
      &nbsp;&nbsp;
      <Button type="main" shape="circle">
        默认
      </Button>
      &nbsp;&nbsp;
      <Button type="main" shape="circle" size="large">
        默认
      </Button>
      &nbsp;&nbsp;
      <br />
      <br />
      <Button type="main" size="small"></Button>&nbsp;&nbsp;
      <Button type="main" size="middle"></Button>&nbsp;&nbsp;
      <Button type="main" size="large"></Button>&nbsp;&nbsp;
      <br />
    </>
  );
};

export default App;

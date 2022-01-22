import { Col, Input, Row } from 'antd';
import { Marked } from './marked/marked'
import React, { useEffect, useRef, useState } from 'react';

export function App() {
  const [input, setInput] = useState('');

  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    containerRef.current.innerHTML = Marked(input);
  }, [input]);

  return (
    <Row style={{ height: '100%' }}>
      <Col span={12} style={{ height: '100%' }}>
        <Input.TextArea
          style={{ height: '100%' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Col>
      <Col span={12}>
        <div ref={containerRef} />
      </Col>
    </Row>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-vant';
import { Pagination, Divider, Form, Selector, Badge } from 'react-vant';
import { useNavigate, useLocation } from 'react-router-dom';

import { questionData, getQuestionLen } from '../data';
import Title from './DomTitle';

export default function Question(props) {
  const location = useLocation();
  let locarr = location.pathname.split('/');
  let initPage = parseInt(locarr.pop(), 10);
  const subloc = locarr.join('/');
  const navigate = useNavigate();
  const pageCount = getQuestionLen()[props.subject];

  const [page, setPage] = useState(initPage);
  if (initPage >= pageCount) {
    return <>题目去哪了</>;
  }

  let pageData = questionData(props.subject, '', page);

  useEffect(() => {
    navigate(`${subloc}/${page}`);

    if (formRef.current) {
      formRef.current.resetFields();
    }
  }, [page, navigate]);

  const options = pageData.Choice.map((item, index) => {
    const label = item;
    const value = String.fromCharCode(65 + index); // 使用String.fromCharCode将索引转换为对应的字母(A, B, C, D, ...)
    return { label, value };
  });

  const formRef = useRef(null);

  Title(pageData.Description + ' ' + props.subject + props.mode);

  return (
    <>
      <Card round>
        <Card.Header>
          <Badge content="单选" style={{ marginRight: '1em' }}></Badge>
          {pageData.Description}
        </Card.Header>
        <Card.Body>
          <Form ref={formRef} layout="horizontal">
            <Form.Item name="single">
              <Selector options={options} />
            </Form.Item>
          </Form>
        </Card.Body>
      </Card>

      <Divider />

      <Pagination
        value={page}
        mode="simple"
        onChange={setPage}
        pageCount={getQuestionLen()[props.subject]}
        prevText="上一题"
        nextText="下一题"
      />
    </>
  );
}

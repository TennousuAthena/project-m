import React, { useState, useEffect, useRef } from 'react';
import { StarO, Star, Upgrade, EyeO } from '@react-vant/icons';
import {
  Card,
  Pagination,
  Divider,
  Form,
  Selector,
  Tag,
  Sticky,
  Empty,
  Space,
  Button,
  Slider,
} from 'react-vant';
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
  if (initPage > pageCount) {
    return <Empty image="search" description="题目去哪了" />;
  }

  let pageData = questionData(props.subject, '', page);
  const isSingleChoice = pageData.Answer.length == 1;
  console.log(pageData)

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
    <div style={{ height: 'calc(100vh - 110px)' }}>
      <Card round>
        <Card.Header>
          <ChoiceTag single={isSingleChoice} />
          <span style={{ fontSize: '1.3em' }}> {pageData.Description} </span>
        </Card.Header>
        <Card.Body>
          <Form ref={formRef} layout="horizontal">
            <Form.Item name="single">
              <Selector options={options} multiple={!isSingleChoice}></Selector>
            </Form.Item>
          </Form>
        </Card.Body>
      </Card>

      <Divider />

      <Sticky offsetTop={'75vh'}>
        <Button.Group block style={{ width: '100%' }}>
          <Button icon={<EyeO />}>看答案</Button>
          <Button icon={<StarO />}>记本本</Button>
          <Button icon={<Upgrade />}>提交</Button>
        </Button.Group>
        <div style={{ height: '1em' }}></div>
        <Pagination
          value={page}
          mode="simple"
          onChange={setPage}
          pageCount={getQuestionLen()[props.subject]}
          prevText="上一题"
          nextText="下一题"
        />
        <div style={{ height: '1em' }}></div>

        <Slider
          min={1}
          max={getQuestionLen()[props.subject]}
          button={<div className="custom-slider-button">{page}</div>}
          value={page}
          onChange={setPage}
        />
      </Sticky>
    </div>
  );
}

const ChoiceTag = (props) => {
  if(props.single){
    return (  <Tag type="primary" style={{ marginRight: '1em', marginBottom: '0.5em' }}>
    单选
  </Tag>);
  }else{
    return(
    <Tag type="warning" style={{ marginRight: '1em', marginBottom: '0.5em' }}>
    多选
  </Tag>
    )
  }

}
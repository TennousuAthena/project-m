import React, { useState, useEffect, useRef } from 'react';
import { StarO, Star, Upgrade, EyeO, ClosedEye } from '@react-vant/icons';
import {
  Card,
  Pagination,
  Divider,
  Form,
  Selector,
  Tag,
  Sticky,
  Empty,
  Button,
  Slider,
} from 'react-vant';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';

import { getQuestionData, getQuestionLen } from '../data';
import Title from './DomTitle';

export default function Question(props) {
  //计算并双向绑定当前id
  const location = useLocation();
  let locarr = location.pathname.split('/');
  let initPage = parseInt(locarr.pop(), 10);
  const subloc = locarr.join('/');
  const navigate = useNavigate();
  const pageCount = getQuestionLen()[props.subject];

  const [seeAns, setSeeAns] = useLocalStorage('seeAns', true);
  const [lastPage, setLastPage] = useLocalStorage('lastPage', {
    马原: 0,
    毛概: 0,
  });
  if (initPage == 0) {
    if (!lastPage[props.subject]) {
      initPage = 1;
    } else {
      initPage = lastPage[props.subject];
    }
  }
  const [page, setPage] = useState(initPage);

  if (initPage > pageCount) {
    return <Empty image="search" description="题目去哪了" />;
  }

  const formRef = useRef(null);
  useEffect(() => {
    navigate(`${subloc}/${page}`);
    switch (props.subject) {
      case '马原':
        setLastPage({ 马原: page, 毛概: lastPage.毛概 });
        break;
      case '毛概':
        setLastPage({ 马原: lastPage.马原, 毛概: page });
        break;
    }
    if (formRef.current) {
      formRef.current.resetFields();
    }
  }, [page]);

  useEffect(() => {
    console.log(seeAns);
  }, [seeAns, setSeeAns]);

  //获取题目信息
  const pageData = getQuestionData(props.subject, '', page);
  const isSingleChoice = pageData.Answer.length == 1;
  const Answer = pageData.Answer.split('');
  Title(pageData.Description + ' ' + props.subject + props.mode);
  console.log(pageData);

  //处理选项
  const options = pageData.Choice.map((item, index) => {
    const label = item;
    const value = String.fromCharCode(65 + index); // 使用String.fromCharCode将索引转换为对应的字母(A, B, C, D, ...)
    return { label, value };
  });

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
              <Selector
                defaultValue={!seeAns ? Answer : []}
                options={options}
                multiple={!isSingleChoice}
                className={seeAns ? 'show-answers' : ''}
                key={seeAns}
              ></Selector>
            </Form.Item>
          </Form>
        </Card.Body>
      </Card>

      <Divider />

      <Sticky offsetTop={'75vh'}>
        <Button.Group block style={{ width: '100%' }}>
          <Button
            icon={seeAns ? <ClosedEye /> : <EyeO />}
            onClick={() => {
              formRef.current.resetFields();
              setSeeAns(!seeAns);
            }}
            color={
              seeAns
                ? ''
                : 'linear-gradient(to right, rgb(75, 108, 183), rgb(24, 40, 72))'
            }
          >
            {seeAns ? '不答案' : '看答案'}
          </Button>
          <Button icon={<StarO />}>记本本</Button>
          <Button icon={<Upgrade />}>提交</Button>
        </Button.Group>
        <div style={{ height: '1em' }}></div>
        <Pagination
          value={page}
          mode="simple"
          onChange={setPage}
          pageCount={pageCount}
          prevText="上一题"
          nextText="下一题"
        />
        <div style={{ height: '1em' }}></div>

        <Slider
          min={1}
          max={pageCount}
          button={<div className="custom-slider-button">{page}</div>}
          value={page}
          onChange={setPage}
        />
      </Sticky>
    </div>
  );
}

const ChoiceTag = (props) => {
  if (props.single) {
    return (
      <Tag type="primary" style={{ marginRight: '1em', marginBottom: '0.5em' }}>
        单选
      </Tag>
    );
  } else {
    return (
      <Tag type="warning" style={{ marginRight: '1em', marginBottom: '0.5em' }}>
        多选
      </Tag>
    );
  }
};

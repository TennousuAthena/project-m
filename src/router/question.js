import React, { useState, useEffect } from 'react';
import { Card } from 'react-vant';
import { Pagination, Divider } from 'react-vant';
import { useNavigate, useLocation  } from 'react-router-dom';



export default function Question() {
  const location = useLocation();
  let locarr = location.pathname.split('/');
  let initPage = locarr.pop();
  const subloc = locarr.join('/');
  const navigate = useNavigate();
  const [page, setPage] = useState(initPage);

  useEffect(() => {
    navigate(`${subloc}/${page}`);
  }, [page, navigate]);
  return (
    <>
    <Card round>
      <Card.Header>圆角卡片</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
    </Card>

    <Divider />

    <Pagination value={page} mode="simple" onChange={setPage} pageCount={129} />
    </>
  );
};
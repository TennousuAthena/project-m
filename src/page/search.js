import React, { useState, useEffect } from 'react';
import { Search, Empty } from 'react-vant';
import { useNavigate, useLocation } from 'react-router-dom';

import Title from '../router/DomTitle';

export default () => {
  const location = useLocation();
  let locarr = location.pathname.split('/');
  let initPage = locarr.pop();

  if (initPage == 'search') {
    initPage = '';
  }

  const [value, setValue] = useState(initPage);
  const navigate = useNavigate();

  useEffect(() => {
    Title(`${value} 搜索`);
    navigate(`/search/${value}`);
  }, [value, navigate]);

  return (
    <>
      <Search
        value={value}
        onChange={setValue}
        //   clearable
        onClear={() => {
          setValue('');
          navigate('/');
        }}
        placeholder="请输入搜索关键词"
      />
      <Empty image="search" description="暂无结果" />
    </>
  );
};

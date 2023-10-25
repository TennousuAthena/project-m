import React, { useState, useEffect } from 'react';
import { Search } from 'react-vant';
import { useNavigate, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  let locarr = location.pathname.split('/');
  let initPage = locarr.pop();
  console.log(initPage);

  if (initPage == 'search') {
    initPage = '';
  }

  const [value, setValue] = useState(initPage);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search/${value}`);
  }, [value, navigate]);

  return (
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
  );
};

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';

import Table from './component/table';
import Header from './component/header';
import SearchAddTask from './component/searchAddTask';
import { loadApp } from './redux/slices/state';
import './style.scss';



const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadApp());  // load list from local storage
  }, [])

  return <>
    <div className='app'>
      <Header />
      <SearchAddTask />
      <Table />
    </div>
  </>;
};

export default App
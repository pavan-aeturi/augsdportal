import React from 'react';
import Table  from './Table';
import {Receivedata }from './Receivedata'
export const DatatablePage = () => {
  return (
    <div>
    <Table
      data={()=>Receivedata('r')}
      signal={false}
    />
    </div>
  );
}

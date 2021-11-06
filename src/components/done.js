import React from 'react';
import Table  from './Table';
import {ReceiveCollectedData }from './Receivedata'
export const DatatablePage = () => {
  return (
    <div>
    <Table
      data={()=>ReceiveCollectedData()}
      signal={false}
    />
    </div>
  );
}

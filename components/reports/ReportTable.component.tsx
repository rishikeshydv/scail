import React from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { Check } from 'lucide-react';

interface DataType {
  key: string;
  feature: string,
  homes_value: boolean,
  book_value: boolean
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '',
    dataIndex: 'feature',
    key: 'feature',
    render: (text) => text,
  },
  {
    title: 'Homes Value',
    key: 'action',
    render: (_, record) => {
        
        return (
            <Space size="middle">
             {record.homes_value ? <Check size={32} color='#0874DE' />: "Xaina" }
            </Space>
          )
    },
  },
  {
    title: 'Book Value',
    key: 'action',
    render: (_, record) => {
        
        return (
            <Space size="middle">
             {record.book_value ? <Check size={32} color='#0874DE' />: "" }
            </Space>
          )
    },
  },
];

const data: DataType[] = [
    {
      "key": "1",
      "feature": "Year, Make, Model, and Trim",
      "homes_value": true,
      "book_value": true
    },
    {
      "key": "2",
      "feature": "Standard and Optional Features",
      "homes_value": true,
      "book_value": true
    },
    {
      "key": "3",
      "feature": "Homes Condition",
      "homes_value": true,
      "book_value": false
    },
    {
      "key": "4",
      "feature": "Number of Owners",
      "homes_value": true,
      "book_value": false
    },
    {
      "key": "5",
      "feature": "Damage History",
      "homes_value": true,
      "book_value": false
    },
    {
      "key": "6",
      "feature": "Service History",
      "homes_value": true,
      "book_value": false
    },
    {
      "key": "7",
      "feature": "Registration History",
      "homes_value": true,
      "book_value": false
    },
    {
      "key": "8",
      "feature": "Open Recalls",
      "homes_value": true,
      "book_value": false
    },
    {
      "key": "9",
      "feature": "Homes Condition",
      "homes_value": true,
      "book_value": false
    }
  ]
  

export const ReportTable: React.FC = () => <Table columns={columns} dataSource={data} className='rounded-[30px]' id='reports-table' />;

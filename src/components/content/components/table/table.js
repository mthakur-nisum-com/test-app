import React from 'react';
import './style.scss';
import { headers } from './constants';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



export const Table = ({ data = [],getMoreDatils }) => {

    return (
        <section className='table-section ag-theme-alpine' style={{ height: 484, width: '100%' }}
        >
            <AgGridReact
                columnDefs={headers}
                rowData={data}
                rowHeight='300'
              
                pagination={true}
                paginationPageSize={10}>
            </AgGridReact>
        </section>
    )
}
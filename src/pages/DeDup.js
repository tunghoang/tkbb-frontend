import { useState, useEffect } from 'react'
import { 
  DataGrid, 
  GridToolbarExport
} from '@material-ui/data-grid'
import Button from '@material-ui/core/Button'
import { queryDupplicatedArticles } from '../api';

export default function DeDup() {
  const [rows, setRows] = useState([]);
  const reloadTable = async () => {
    console.log('reloadTable');
    const { data: articles } = await queryDupplicatedArticles();
    console.log(articles);
    setRows(articles);
  }
  useEffect(() => {
    reloadTable();
  }, []);

  const columns = [
    {field: "id", headerName: 'ID', width: 100},
    {field: 'title', headerName: 'Title', width: 900},
    {field: 'cnt', headerName: 'Count', width: 100}
  ];
  console.log('DeDup');
  return (
    <div className="content-wrapper">

      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Các bài báo phân loại lỗi (có nhiều phân loại)</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="text-right">
          </div>
          <div style={{ height: 700, width: '100%', backgroundColor: '#fff' }}>
            <DataGrid 
              rows={rows} columns={columns} pageSize={10}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

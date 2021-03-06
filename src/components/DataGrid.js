import { DataGrid, useGridSlotComponentProps } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/styles'
import GridToolbar from './GridToolbar';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (<div style={{display: 'flex', flexDirection: 'row'}}>
    <input type="number" value={state.pagination.page + 1} style={{width: '5em', textAlign: 'center'}}
      onChange={(event) => {
        let v = event.target.value - 1;
        apiRef.current.setPage(Math.max(Math.min(v, state.pagination.pageCount), 1));
      }} />
    <Pagination
      className={classes.root}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    /></div>
  );
}

export default function MyDataGrid(props) {
  return (
    <DataGrid
      columns={props.columns}
      rows={props.rows}
      pageSize={props.pageSize}
      page={props.page}
      onFilterModelChange={props.onFilterModelChange}
      onEditCellChangeCommitted={props.onEditCellChangeCommitted}
      filterModel={props.filterModel}
      components={{ Toolbar: GridToolbar, Pagination: CustomPagination }}
      componentsProps={{ toolbar: {
        clearFilter: props.clearFilterFn,
        clearSearchText: props.clearSearchTextFn,
        value: props.filterText,
        onChange: props.filterTextChangeFn,
        all: props.all,
        toggleAll: props.toggleAll,
        confirmed: props.confirmed,
        classified: props.classified,
        toggleConfirmed: props.toggleConfirmed,
        toggleClassified: props.toggleClassified
      } }}>
    </DataGrid>
  )
}

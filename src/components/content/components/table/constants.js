import { formatDate } from '../../../../ducks';


export const headers = [{
    headerName: 'S.no',
    field: null,
    valueGetter: ({ node }) => node.rowIndex + 1,
    sortable: true
}, {
    headerName: 'Cover',
    field: 'jacketUrl',
    cellRenderer: (row) => {
        return <img src={row.value} alt={row.title} height='100%' width='100%' />
    }
}, {
    headerName: 'Author',
    field: 'author',
    sortable: true,
    filterable: true
}, {
    headerName: 'Biography',
    field: 'authorBiography',
    cellRenderer: (row) => <p dangerouslySetInnerHTML={{ __html: row.value }} />
}, {
    headerName: 'Title',
    field: 'title',
    sortable: true,
    filterable: true
}, {
    headerName: 'Reading time (minutes)',
    field: 'estimatedReadingTimeMinutes',
    sortable: true,
    filterable: true
}, {
    headerName: 'Publication date',
    field: 'publicationDate',
    sortable: true,
    filterable: true,
    cellRenderer: ({ value }) => formatDate(value)
}, {
    headerName: 'Is Featured',
    field: 'isFeatured',
    cellRenderer: (row) => <>{row.value ? 'Yes' : 'No'}</>
}]
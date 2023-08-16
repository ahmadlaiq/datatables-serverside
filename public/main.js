//Datatables
$(document).ready( function () {
    $('#myTable').DataTable({
        ordering: true,
        serverSide: true,
        processing: true,
        ajax: {
            url: $('#table-url').val(),
        },
        columns: [
            {data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false, width: '10px'},
            {data: 'name', name: 'name'},
            {data: 'email', name: 'email'},
            {data: 'role.name', name: 'role.name'},
            {data: 'action', name: 'action', orderable: false, searchable: false},
        ],

    });
} );


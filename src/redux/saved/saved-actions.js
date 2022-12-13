import { createAction } from "@reduxjs/toolkit"

const savedAdd = createAction('saved/add');
const savedDelete = createAction('saved/delete');

export default {
    savedAdd,
    savedDelete
};
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getCustomers(page = 1,limit = 10){
    const offset = helper.getOffset(page, limit);

    const rows = await db.query(
        `SELECT * FROM customer LIMIT ?,?`,
        [offset, limit]
    );

    const totalRows = await db.query(
        `SELECT COUNT(id) as totalCount FROM customer`
    );

    const data = helper.emptyOrRows(rows);
    const meta = {
        page,
        'totalPage': Math.ceil((totalRows[0].totalCount / limit))
    };

    return {
        data,
        meta,
    }
}

module.exports = {
    getCustomers
}

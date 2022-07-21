const { pool } = require("../database/db.config");
const table = 'master_status-sellings'

exports.findAll = async () => {
    const query = await pool.query(`
    SELECT * 
    FROM 
    ${table}
    `)

    return query
}
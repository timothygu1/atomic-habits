
import { createPool } from "mysql2"


const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'atomic-habits',
    password: '32L562ZET6Q94jWx7?090'
})

const poolPromise = pool.promise();

export default poolPromise;

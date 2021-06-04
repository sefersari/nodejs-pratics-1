const sqlFixtures = require('sql-fixtures');
const env = process.env;
const MD5 = require("crypto-js/md5");

const dbConfig = {
    client: 'mysql',
    connection: {
        host: env.DB_HOST,
        user: env.DB_USER || 'root',
        password: env.DB_PASS || '',
        database: env.DB_NAME || 'niceyecase',
        port: 3306
    }
};

const customerData = [];
for (let i = 1; i <= 150;i++){
    customerData.push({
        full_name: 'Deneme Kullanıcı'+i,
        email: 'destek'+i+'@destek.com',
        password: MD5('123321123').toString(),
        birth_date: new Date(),
        is_deleted: Math.floor(Math.random() * 2)
    });
}

const dataSpec = {
    customer: customerData
};

sqlFixtures.create(dbConfig, dataSpec);

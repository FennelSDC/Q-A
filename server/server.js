
const { Client } = require('pg')


const Questionsquery = async () => {
  try {
    const client = new Client({
      user: 'cihadakkaya',
      host: 'localhost',
      database: 'sdc',
      port: 5432}
    )
    await client.connect()
     return await client.query('SELECT * FROM questions INNER JOIN answers ON answers. where id = 1').then((data) => {
      return data;
    }).catch((err) => {
  console.log(err)
    })
    await client.end()
  } catch (error) {
    console.log(error)
  }
}

// SELECT
// c.customer_id,
// first_name,
// last_name,
// email,
// amount,
// payment_date
// FROM
// customer c
// INNER JOIN payment p
//   ON p.customer_id = c.customer_id
// WHERE
//   c.customer_id = 2;

 module.exports = Questionsquery;
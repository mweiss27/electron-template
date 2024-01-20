import { addressesTableDefinition } from "./tables/addresses"
import { statesTableDefinition } from "./tables/states"

export const connection = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "/Users/mweiss/git/personal/electron-template/mydb.sqlite",
  },
})

const createTable = tableDefinition => {
  console.log(`Ensuring table ${tableDefinition.name} exists`)
  connection.schema.hasTable(tableDefinition.name).then(exists => {
    if (!exists) {
      tableDefinition
        .create(connection)
        .then(() => {
          // Log success message
          console.log("done")
        })
        .catch(error => {
          console.error(`There was an error setting up the database: ${error}`)
        })
    }
  })
}
console.log(`Creating tables`)

createTable(addressesTableDefinition)
createTable(statesTableDefinition)

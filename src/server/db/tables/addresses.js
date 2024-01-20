const name = "Addresses"

export const addressesTableDefinition = {
  name,
  create: knex =>
    knex.schema.createTable(name, table => {
      table.increments("id").primary()
      table.integer("customerID")
      table.string("addressType")
      table.string("uspsMailingAddress")
      table.string("address1")
      table.string("address2")
      table.string("city")
      table.string("state")
      table.string("zip")
      table.datetime("createDate")
      table.datetime("deleteDate")
      table.datetime("modifyDate")
    }),
}

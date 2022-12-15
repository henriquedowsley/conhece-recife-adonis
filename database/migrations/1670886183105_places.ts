import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'places'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description', 'longtext').notNullable()
      table.string('city').notNullable()
      table.string('street').notNullable()
      table.string('uf').notNullable()
      table.string('complement')
      table.string('district').notNullable()
      table.bigInteger('longitude')
      table.bigInteger('latitude')
      table
        .integer('category_id')
        .unsigned()
        .references('categories.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

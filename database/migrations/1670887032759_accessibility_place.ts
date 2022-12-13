import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'accessibility_place'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('place_id').unsigned().references('places.id')
      table.integer('accessibility_id').unsigned().references('accessibilities.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

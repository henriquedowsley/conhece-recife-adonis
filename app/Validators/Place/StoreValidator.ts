import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
    city: schema.string(),
    street: schema.string(),
    uf: schema.string(),
    complement: schema.string.optional(),
    district: schema.string(),
    longitude: schema.number.optional(),
    latitude: schema.number.optional(),
    image: schema.string.optional(),
    categoryId: schema.number([rules.exists({ table: 'categories', column: 'id' })]),
    accessibilityIds: schema
      .array()
      .members(schema.number([rules.exists({ table: 'accessibilities', column: 'id' })]))
  })

  public messages: CustomMessages = {}
}

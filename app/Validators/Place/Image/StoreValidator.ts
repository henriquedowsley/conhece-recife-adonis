import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    url: schema.string(),
    isMain: schema.boolean(),
    placeId: schema.number([rules.exists({ table: 'places', column: 'id' })])
  })

  public messages: CustomMessages = {}
}

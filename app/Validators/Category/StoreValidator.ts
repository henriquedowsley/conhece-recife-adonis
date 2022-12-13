import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.unique({ table: 'categories', column: 'name' })]),
    icon: schema.string.optional()
  })

  public messages: CustomMessages = {}
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Category'
import { Category } from 'App/Models'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    const categories = await Category.query().orderBy('id', 'asc')

    return categories
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const category = await Category.create(data)

    return category
  }

  public async show({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)

    return category
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)

    const category = await Category.findOrFail(params.id)

    category.merge(data)

    await category.save()

    return category
  }

  public async destroy({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)

    await category.delete()
  }
}

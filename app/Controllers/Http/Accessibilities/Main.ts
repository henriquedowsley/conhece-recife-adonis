import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Accessibility'
import { Accessibility } from 'App/Models'

export default class AccessibilitiesController {
  public async index({}: HttpContextContract) {
    const accessibilities = await Accessibility.query().orderBy('id', 'asc')

    return accessibilities
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const accessibility = await Accessibility.create(data)

    return accessibility
  }

  public async show({ params }: HttpContextContract) {
    const accessibility = await Accessibility.findOrFail(params.id)

    return accessibility
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)

    const accessibility = await Accessibility.findOrFail(params.id)

    accessibility.merge(data)

    await accessibility.save()

    return accessibility
  }

  public async destroy({ params }: HttpContextContract) {
    const accessibility = await Accessibility.findOrFail(params.id)

    await accessibility.delete()
  }
}

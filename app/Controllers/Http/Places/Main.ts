import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Place'
import { Place } from 'App/Models'

export default class PlacesController {
  public async index({}: HttpContextContract) {
    const places = await Place.query()
      .preload('images')
      .preload('category')
      .preload('accessibilities')
      .orderBy('id', 'asc')

    return places
  }

  public async store({ request }: HttpContextContract) {
    const { accessibilityIds, ...data } = await request.validate(StoreValidator)

    const place = await Place.create(data)

    if (accessibilityIds) {
      await place.related('accessibilities').attach(accessibilityIds)
    }

    await place.load('category')
    await place.load('accessibilities')
    await place.load('images')

    return place
  }

  public async show({ params }: HttpContextContract) {
    const place = await Place.findOrFail(params.id)

    await place.load('category')
    await place.load('accessibilities')
    await place.load('images')

    return place
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)

    const place = await Place.findOrFail(params.id)

    place.merge(data)

    await place.save()

    return place
  }

  public async destroy({ params }: HttpContextContract) {
    const place = await Place.findOrFail(params.id)

    await place.delete()
  }
}

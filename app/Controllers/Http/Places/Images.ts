import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Place/Image'
import { Image } from 'App/Models'

export default class PlacesController {
  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const image = await Image.create(data)

    if (data.isMain) {
      await Image.query()
        .where('place_id', data.placeId)
        .where('id', '!=', image.id)
        .update({ isMain: false })
    }

    return image
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)

    const image = await Image.findOrFail(params.id)

    if (data.isMain) {
      await Image.query()
        .where('place_id', data.placeId)
        .where('id', '!=', image.id)
        .update({ isMain: false })
    }

    image.merge(data)

    await image.save()

    return image
  }

  public async destroy({ params }: HttpContextContract) {
    const image = await Image.findOrFail(params.id)

    await image.delete()
  }
}

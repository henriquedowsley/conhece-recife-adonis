import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Contact'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class CategoriesController {
  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    await Mail.send((message) => {
      message
        .from(Env.get('SMTP_USERNAME'))
        .to(Env.get('SMTP_USERNAME'))
        .subject('Solicitação de contato')
        .htmlView('emails/contact', data)
    })
  }
}

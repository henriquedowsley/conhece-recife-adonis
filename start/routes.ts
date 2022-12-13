import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/categories', 'Categories/Main').apiOnly()

Route.resource('/accessibilities', 'Accessibilities/Main').apiOnly()

Route.post('/places/:id/images', 'Places/Images.store')
Route.put('/places/images/:id', 'Places/Images.update')
Route.delete('/places/images/:id', 'Places/Images.destroy')

Route.resource('/places', 'Places/Main').apiOnly()

Route.post('/contact', 'Contact/Main.store')

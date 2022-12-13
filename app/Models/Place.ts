import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'
import { Category, Accessibility, Image } from 'App/Models'

export default class Place extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public city: string

  @column()
  public street: string

  @column()
  public uf: string

  @column()
  public complement: string

  @column()
  public district: string

  @column()
  public longitude: number

  @column()
  public latitude: number

  @column()
  public image: string

  @column()
  public categoryId: number

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @manyToMany(() => Accessibility)
  public accessibilities: ManyToMany<typeof Accessibility>

  @hasMany(() => Image)
  public images: HasMany<typeof Image>
}

export type NotNullableTypes<Type> = {
  [Key in keyof Type]-?: NonNullable<Type[Key]>
}

export class Recipe {
  _name!: string;
  _category?: string;
  _desc?: string;
  _tiempo?: string;

  constructor(aName: string, aDesc: string, aTiempo: string) {
    this.name = aName;
    this._desc = aDesc;
    this._tiempo = aTiempo;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripción: ${this._desc} - tiempo prep: ${this._tiempo}` ;
  }
}

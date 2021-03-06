import {IProperties} from '../../../Interfaces/Editor/IProperty';
import {IGameCharacterTemplate} from '../../../Interfaces/Editor/IGameCharacterTemplate';
import {IBaseGameEntity} from '../../../Interfaces/Editor/IBaseGameEntity';
import {EntityTypeEnum} from '../../Storage/EntityTypeEnum';
import {IField} from '../../../Interfaces/Editor/IField';
import {PropertyTypes} from '../../../Enums/property-types.enum';

export class GameCharacterTemplate implements IGameCharacterTemplate, IBaseGameEntity {
  id: number;
  get Name() {
    return this.Properties.Name.value + ' ' + this.id;
  }
  Properties: IProperties = {};
  Fields: IField[] = [];
  FieldValues: {[key: string]: any} = {};
  Description: string;
  EntityType: EntityTypeEnum = EntityTypeEnum.CharacterTemplate;

  // Entity's Tags
  public Tags: string[];

  constructor(characterTemplateToCopy?: GameCharacterTemplate) {
    if (characterTemplateToCopy) {
      this.id = characterTemplateToCopy.id;
      this.Properties = JSON.parse(JSON.stringify(characterTemplateToCopy.Properties));
      this.Fields = JSON.parse(JSON.stringify(characterTemplateToCopy.Fields));
      this.FieldValues = JSON.parse(JSON.stringify(characterTemplateToCopy.FieldValues));
      this.Description = characterTemplateToCopy.Description;
    } else {
      this.Properties.Name = {id: 0, value: 'New Character Template', type: PropertyTypes.string};
    }
  }
}

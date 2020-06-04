import {IGameCharacter} from '../../../Interfaces/Editor/IGameCharacter';
import {IGameCharacterTemplate} from '../../../Interfaces/Editor/IGameCharacterTemplate';
import {IProperties} from '../../../Interfaces/Editor/IProperty';
import {IGameObject} from '../../../Interfaces/Editor/IGameObject';
import {IBaseGameEntity} from '../../../Interfaces/Editor/IBaseGameEntity';
import {EntityTypeEnum} from '../../Storage/EntityTypeEnum';

export class CharacterObject implements IGameCharacter, IBaseGameEntity {

  // ID des Objektes.
  id: number;

  // Entity's Tags
  public Tags: string[];

  // Charakter/Heldenname.
  Name: string;

  // Beschreibung zu dem Charakter.
  Description: string;

  // Das zu ladene Template
  CharacterTemplate: IGameCharacterTemplate;

  // Zugewiesene Werte/Eigenschaften.
  Properties: IProperties;

  // Items die dem Charakter zugewiesen sind.
  Items: IGameObject[];

  EntityType: EntityTypeEnum = EntityTypeEnum.Character;

}

import {IGameObject} from '../../../Interfaces/Editor/IGameObject';
import {IAdventureObject} from '../../../Interfaces/Editor/IAdventureObject';
import {IGameCharacter} from '../../../Interfaces/Editor/IGameCharacter';
import {IGameScene} from '../../../Interfaces/Editor/IGameScene';
import {IGameScript} from '../../../Interfaces/Editor/IGameScript';
import {IBaseGameEntity} from '../../../Interfaces/Editor/IBaseGameEntity';
import {EntityTypeEnum} from '../../Storage/EntityTypeEnum';
import {IProperties} from '../../../Interfaces/Editor/IProperty';

export class AdventureObject implements IAdventureObject, IBaseGameEntity {

  // ID of the Adventure.
  public id: number;

  // Path of the Adventure.
  public path: string;

  // Entity's Tags
  public Tags: string[];

  // Name of the Adventure.
  public Name: string;

  // Descriptiontext of the Adventure.
  public Description: string;

  // URL to the preview image of the Adventure.
  public PreviewImgUrl: string;

  // Descriptiontext about the adventure type and Format (for e.g. D&D, DSA etc.)
  public TypeDescription: string;

  // Containing Characters
  public Characters: IGameCharacter[];

  // ALL Containing GameObject -> (Does it make sense or rather assign directly to Character and Scenes..?)
  public Items: IGameObject[];

  // ALL containing GameScenes.
  public Scenes: IGameScene[];

  // ALL containing GameScripts.
  public Scripts: IGameScript[];

  EntityType: EntityTypeEnum = EntityTypeEnum.Adventure;
  Properties: IProperties;



}

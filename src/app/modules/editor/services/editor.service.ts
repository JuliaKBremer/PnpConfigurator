import { Injectable } from '@angular/core';
import {LibraryService} from '../../../core/service/localLibrary/library.service';
import {AdventureObject} from '../../../data/schema/Classes/Editor/Adventure/AdventureObject';
import {CharacterObject} from '../../../data/schema/Classes/Editor/Character/CharacterObject';
import {GameObject} from '../../../data/schema/Classes/Editor/Objects/GameObject';
import {SceneObject} from '../../../data/schema/Classes/Editor/Scene/SceneObject';
import {GameScript} from '../../../data/schema/Classes/Editor/Scripts/GameScript';
import {GameChapter} from '../../../data/schema/Classes/Editor/Chapter/GameChapter';
import {NoteObject} from '../../../data/schema/Classes/Editor/Scene/SceneNote';
import {GameObjectTemplate} from '../../../data/schema/Classes/Editor/Templates/GameObjectTemplate';
import {BehaviorSubject} from 'rxjs';
import {GameCharacterTemplate} from '../../../data/schema/Classes/Editor/Templates/GameCharacterTemplate';
import {EntityTypeEnum} from '../../../data/schema/Classes/Storage/EntityTypeEnum';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  Adventures: BehaviorSubject<AdventureObject[]>;
  Characters: BehaviorSubject<CharacterObject[]>;
  Objects: BehaviorSubject<GameObject[]>;
  Scenes: BehaviorSubject<SceneObject[]>;
  Scripts: BehaviorSubject<GameScript[]>;
  Chapters: BehaviorSubject<GameChapter[]>;
  Notes: BehaviorSubject<NoteObject[]>;
  ObjectTemplates: BehaviorSubject<GameObjectTemplate[]>;
  CharacterTemplates: BehaviorSubject<GameCharacterTemplate[]>;

  name: string;
  path = 'C:\\Users\\timom\\Desktop\\Neuer Ordner (2)'; // TODO: get path from settings

  constructor(private libraryService: LibraryService) {
    this.Adventures = new BehaviorSubject<AdventureObject[]>([]);
    this.Characters = new BehaviorSubject<CharacterObject[]>([]);
    this.Objects = new BehaviorSubject<GameObject[]>([]);
    this.Scenes = new BehaviorSubject<SceneObject[]>([]);
    this.Scripts = new BehaviorSubject<GameScript[]>([]);
    this.Chapters = new BehaviorSubject<GameChapter[]>([]);
    this.Notes = new BehaviorSubject<NoteObject[]>([]);
    this.ObjectTemplates = new BehaviorSubject<GameObjectTemplate[]>([]);
    this.CharacterTemplates = new BehaviorSubject<GameCharacterTemplate[]>([]);

    this.NewPackage('New Package');
  }

  public GetNewID(): number {
    return (Date.now() * 1000) + Math.floor(Math.random() * 1000);
  }

  private GetDataFromLibrary() {
    this.Adventures.next(this.libraryService.Adventures);
    this.Characters.next(this.libraryService.Characters);
    this.Objects.next(this.libraryService.Objects);
    this.Scenes.next(this.libraryService.Scenes);
    this.Scripts.next(this.libraryService.Scripts);
    this.Chapters.next(this.libraryService.Chapters);
    this.Notes.next(this.libraryService.Notes);
    this.ObjectTemplates.next(this.libraryService.ObjectTemplates);
    this.CharacterTemplates.next(this.libraryService.CharacterTemplates);
  }

  public NewPackage(name: string) {
    this.libraryService.Clear();

    this.GetDataFromLibrary();

    this.name = name;
  }

  public LoadPackage(name: string) {
    this.libraryService.LoadPackage(this.path, name);

    this.GetDataFromLibrary();
  }

  public SavePackage() {
    this.libraryService.SavePackage(this.path, this.name);
  }

  public UpdateLibrary(newArray: any[], entityType: EntityTypeEnum) {
    switch (entityType) {
      case EntityTypeEnum.Object:
        this.libraryService.Objects = newArray;
        break;
      case EntityTypeEnum.Adventure:
        this.libraryService.Adventures = newArray;
        break;
      case EntityTypeEnum.Chapter:
        this.libraryService.Chapters = newArray;
        break;
      case EntityTypeEnum.Character:
        this.libraryService.Characters = newArray;
        break;
      case EntityTypeEnum.Note:
        this.libraryService.Notes = newArray;
        break;
      case EntityTypeEnum.Scene:
        this.libraryService.Scenes = newArray;
        break;
      case EntityTypeEnum.Script:
        this.libraryService.Scripts = newArray;
        break;
      case EntityTypeEnum.CharacterTemplate:
        this.libraryService.CharacterTemplates = newArray;
        break;
      case EntityTypeEnum.ObjectTemplate:
        this.libraryService.ObjectTemplates = newArray;
        break;
    }

    this.GetDataFromLibrary();
  }
}

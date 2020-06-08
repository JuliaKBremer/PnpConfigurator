import {Component, OnInit} from '@angular/core';
import {EditorService} from '../../services/editor/editor.service';
import {EntityTypeEnum} from '../../../../data/schema/Classes/Storage/EntityTypeEnum';
import {IBaseGameEntity} from '../../../../data/schema/Interfaces/Editor/IBaseGameEntity';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public entityTypeEnum = EntityTypeEnum;
  public buttonsLeft = [EntityTypeEnum.Chapter, EntityTypeEnum.Scene, EntityTypeEnum.Object, EntityTypeEnum.Character, EntityTypeEnum.Note,
    EntityTypeEnum.ObjectTemplate];

  constructor(public editorService: EditorService) { }

  ngOnInit() {
  }

  public NewObject() {
    this.editorService.NewObject();
  }

  public CopyObject(entry: IBaseGameEntity) {
    this.editorService.CopyObject(entry);
  }

  public DeleteObject(entry: IBaseGameEntity) {
    this.editorService.DeleteObject(entry);
  }

  setCurrentSidebar(entityType: EntityTypeEnum) {
    this.editorService.currentSelectedEntityType = entityType;
  }

  setSelectedObject(entity: IBaseGameEntity) {
    this.editorService.SetSelectedObject(entity);
  }
}

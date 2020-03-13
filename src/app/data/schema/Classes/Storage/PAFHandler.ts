// Mirco Hölzenbein, FEB. 17, 20
// PAFHandler - PackageAllocationFileHandler
// Verwaltet / Wertet Informationen zu einer PAFile (PackageAllocationFile) aus,
// um so die Objektverweise auf die JSON-Dateien ausfindig zu machen.

import {PAFile} from './PAFile';
import {StorageSystemService} from '../../../../core/service/storageSystem/storage-system.service';
import {StorageFile} from './StorageFile';
import {IBaseGameEntity} from '../../Interfaces/Editor/IBaseGameEntity';
import {Type} from '@angular/compiler';
import {PAFEntry} from './PAFEntry';
import {IStorageLoad} from '../../Interfaces/storage/IStorageLoad';


export class PAFHandler {

  tempFile: object = null;
  public event: Event = new Event('Loaded');

  constructor(private FileAccessService: StorageSystemService) {

  }

  public eventHandler(e) {
    console.log('The time is: ' + e.detail);
  }

  public SavePAFile(file: PAFile): boolean {
    const revtal = false;
    if (file != null) {
      const storageFile = new StorageFile();
      storageFile.Name = file.Name;
      storageFile.Description = file.Description;
      storageFile.fileName = file.fileName;
      storageFile.filePath = file.filePath;
      storageFile.fileData = file;
      console.log('Saving: ' + storageFile.filePath);
      console.log('Saving: ' + storageFile.fileName);
      this.FileAccessService.saveData(storageFile);
    }
    return revtal;
  }



  public Load<T>(filePath: string, filename: string) {
    const storageFile = new StorageFile();
    storageFile.fileName = 'main.paf';
    storageFile.filePath = filePath + '/' + filename ;

  }

  public LoadPAFFile(filePath: string, filename: string) {
    this.Load(filePath, filename);
    // let aaf: PAFEntry[] = null as PAFEntry[];
    const storageFile = new StorageFile();
    storageFile.fileName = 'main.paf';
    storageFile.filePath = filePath + '/' + filename ;

    const asd = this.FileAccessService.loadData(storageFile)
      .then( (response) => {
        const result = (response as PAFile);
        if (result != null) {
          const awfq: PAFEntry[] = [];
          for (const entry of result.Entries) {
            console.log(entry.type);
            awfq.push(entry);
          }
          return awfq;
        }
    });

    return asd;
  }


}

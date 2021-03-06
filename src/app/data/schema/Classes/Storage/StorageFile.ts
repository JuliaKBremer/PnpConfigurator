// Author: Mirco Hölzenbein
// Klasse zur vereinheitlichung des Datenzugriff des storageSystem,
// somit wird nur eine Klasse anstelle jeweils seperate benötigt.

import {IStorageAppend} from '../../Interfaces/storage/IStorageAppend';
import {IStorageDelete} from '../../Interfaces/storage/IStorageDelete';
import {IStorageLoad} from '../../Interfaces/storage/IStorageLoad';
import {IStorageRename} from '../../Interfaces/storage/IStorageRename';
import {IStorageSave} from '../../Interfaces/storage/IStorageSave';

export class StorageFile implements IStorageAppend, IStorageDelete, IStorageLoad, IStorageRename, IStorageSave {
  Name: string;
  Description: string;
  filePath: string;
  fileName: string;
  fileData: object;
  newFileName: string;
  oldFileName: string;
  text: string;
}

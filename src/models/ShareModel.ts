import BaseModel from './BaseModel'
import { ShareData, default as Share } from '../schemas/Share'
import { dataToSchema } from '../utils/index'
import { ShareId } from '../teambition'

export class ShareModel extends BaseModel {

  private _schemaName = 'Share'

  addOne(share: ShareData) {
    const result = dataToSchema<ShareData>(share, Share)
    return this._save(result)
  }

  getOne(shareId: ShareId) {
    return this._get<ShareData>(<any>shareId)
  }
}

export default new ShareModel

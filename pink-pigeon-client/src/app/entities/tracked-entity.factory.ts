import { TrackedEntityModel } from './tracked-entity.model';

export default class TrackedEntityFactory {

  static isTrackedEntityModel(obj: any): boolean {
    return (
      obj.uid !== undefined &&
      obj.dateOfCreation !== undefined &&
      obj.ownerId !== undefined &&
      obj.dateOfLastEdit !== undefined &&
      obj.entityName !== undefined &&
      obj.unit !== undefined &&
      obj.interval !== undefined &&
      obj.entries !== undefined
    );
  }

  static fromJSON(raw: any): TrackedEntityModel {
    if (TrackedEntityFactory.isTrackedEntityModel(raw)) {
      return {
        uid: raw.uid,
        dateOfCreation: raw.dateOfCreation,
        ownerId: raw.ownerId,
        dateOfLastEdit: raw.dateOfLastEdit,
        entityName: raw.entityName,
        entityDesc: raw.entityDesc || '',
        unit: raw.unit,
        interval: raw.interval,
        goal: raw.goal,
        entries: raw.entries,
      };
    } else {
      throw new Error('Parsed object not a proper TrackedEntityModel.');
    }
  }
}

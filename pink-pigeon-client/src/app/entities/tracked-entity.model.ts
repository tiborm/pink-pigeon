export enum BasicUnit {
  DONE, // Particular day ticked, matches with ONE_PER_DAY frequency
  NUMBER,
}

enum TimeUnit {
  MINUTES,
  HOURS,
}

enum WeightUnit {
  GRAM,
  KILOGRAM,
  LB,
}

export enum TrackingInterval {
  ONE_PER_DAY,
  TWICE_PER_DAY,
  ANY_PER_DAY,
}

class GoalModel {
  amount = 0;
  unit = WeightUnit.GRAM;
  period = TrackingInterval.ONE_PER_DAY;
}

class TrackRecordModel {
  timeStamp = '';
  value = 0;
}

export interface TrackedEntityModel {
  readonly uid: string;
  readonly dateOfCreation: string;
  readonly ownerId: string;
  dateOfLastEdit: string;

  entityName: string;
  entityDesc?: string;

  unit: BasicUnit;
  interval: TrackingInterval;
  goal?: GoalModel;

  entries: TrackRecordModel[];
}

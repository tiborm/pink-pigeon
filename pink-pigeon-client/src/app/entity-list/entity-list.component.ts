import { Component, OnInit, Input } from '@angular/core';
import { TrackedEntityModel, BasicUnit, TrackingInterval } from '../entities/tracked-entity.model';
import { of, Observable } from 'rxjs';
import TrackedEntityFactory from '../entities/tracked-entity.factory';
import { v4 as uuid } from 'uuid/';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  trackedEntities$: Observable<TrackedEntityModel[]>;

  constructor() { }

  ngOnInit() {

    const getFakeData = () => {
      return {
        uid: uuid(),
        dateOfCreation: new Date().getTime(),
        ownerId: 'Tibi',
        dateOfLastEdit: new Date().getTime(),
        entityName: '',
        entityDesc: '',
        unit: BasicUnit.DONE,
        interval: TrackingInterval.ONE_PER_DAY,
        entries: [],
      }
    }

    this.trackedEntities$ = (function getFakeEntityList() {
      return of([
        TrackedEntityFactory.fromJSON({ ...getFakeData(), entityName: 'Cigarets' }),
        TrackedEntityFactory.fromJSON({ ...getFakeData(), entityName: 'Workouts' }),
        TrackedEntityFactory.fromJSON({ ...getFakeData(), entityName: 'Bodyweight' }),
      ]);
    })();

  }

}

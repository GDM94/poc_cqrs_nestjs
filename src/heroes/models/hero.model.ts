import { AddPointsEvent } from '../events/impl/add-points.event';
import { AggregateRoot } from '@nestjs/cqrs';
import { RemovePointsEvent } from '../events/impl/remove-points.event';

export class Hero extends AggregateRoot {

  public readonly id: string;

  public points : number = 0;

  constructor(id: string) {
    super();
    this.id = id;
  }

  addPoints(points: number){
    this.apply(new AddPointsEvent(this.id, points));
  }

  removePoints(points: number){
    this.apply(new RemovePointsEvent(this.id, points));
  }

  onAddPointsEvent(event: AddPointsEvent){
    this.points += +event.points;
  }

  onRemovePointsEvent(event: RemovePointsEvent){
    this.points -= event.points;
  }

}

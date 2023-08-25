import { StorableEvent } from 'event-sourcing-nestjs';

export class AddPointsEvent extends StorableEvent {

  eventAggregate = 'hero';
  eventVersion = 1;
  
  constructor(
    public readonly id: string,
    public readonly points: number,
  ) {
    super();
  }
}

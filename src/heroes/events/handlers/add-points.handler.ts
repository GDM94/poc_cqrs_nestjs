import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { AddPointsEvent } from '../impl/add-points.event';

@EventsHandler(AddPointsEvent)
export class AddPointsHandler implements IEventHandler<AddPointsEvent> {
  handle(event: AddPointsEvent) {
    console.log(clc.yellowBright('Async AddPoints...'));
  }
}

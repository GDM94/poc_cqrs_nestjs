import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { BalanceVariationCommand } from '../impl/balance-variation.command';
import { StoreEventPublisher } from 'event-sourcing-nestjs';

@CommandHandler(BalanceVariationCommand)
export class BalanceVariationHandler implements ICommandHandler<BalanceVariationCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: StoreEventPublisher,
  ) {}

  async execute(command: BalanceVariationCommand) {
    console.log(clc.greenBright('BalanceVariationCommand...'));

    const { userId, points, variation } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(userId),
    );
    if (variation == "ADD"){
      hero.addPoints(points)
    }else{
      hero.removePoints(points)
    }
    hero.commit();
  }
}

import { Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Hero } from './models/hero.model';
import { GetHeroeQuery } from './queries/impl';
import { BalanceVariationCommand } from './commands/impl/balance-variation.command';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async find(@Param('id') id: string): Promise<Hero> {
    return this.queryBus.execute(new GetHeroeQuery(id));
  }

  @Post(':id/points/add/:points')
  async addUserPoints(@Param('id') id: string, @Param('points') points: number) {
    return this.commandBus.execute(new BalanceVariationCommand(id, points, "ADD"));
  }

  @Post(':id/points/remove/:points')
  async removeUserPoints(@Param('id') id: string, @Param('points') points: number) {
    return this.commandBus.execute(new BalanceVariationCommand(id, points, "REMOVE"));
  }

}

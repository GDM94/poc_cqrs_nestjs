export class BalanceVariationCommand {
  constructor(
    public readonly userId: string,
    public readonly points: number,
    public readonly variation: string,
  ) {}
}

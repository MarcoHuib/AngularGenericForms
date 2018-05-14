export class Random {
    public static get number(): number {
        return Math.floor((Math.random() * 10000) + 1);
    }
}

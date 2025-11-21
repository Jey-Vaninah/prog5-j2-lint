export class Wallet {
    private color: string;
    private size: number;
    private money: number;
    private opened: boolean;
    private lost: boolean;

    constructor(color: string, size: number) {
        this.color = color;
        this.size = size;
        this.money = 0;
        this.opened = false;
        this.lost = false;
    }

    private notify(message: string): void {
        void message;
    }

    public getMoney(): number {
        return this.money
    }

    public addMoney(amount: number): void {
        if (this.lost) {
            this.notify("Cannot add money the wallet is lost");
            return;
        }
        this.money += amount;
    }

    public open(): void {
        if (this.lost) {
            this.notify("Cannot open: the wallet is lost");
            return;
        }
        else {
            this.opened = true;
        }
    }

    public close(): void {
        this.opened = false
    }

    public isLost(): boolean {
        return this.lost;
    }

    public checkMoney(): string {
        return `Available money: ${this.money} €`;
    }
}
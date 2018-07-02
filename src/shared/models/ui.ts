const initial: UI = {
    loading: false,
    message: null,
    error: null,
};

export class UI {
    public loading: boolean;
    public message: string | null;
    public error: string | null;

    public constructor(ui?: Partial<UI>) {
        Object.assign(this, initial, ui);
    }
}

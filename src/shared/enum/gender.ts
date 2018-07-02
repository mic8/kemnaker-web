export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export namespace Gender {
    export function getValue(): { id: Gender; text: string }[] {
        return [
            {
                id: Gender.MALE,
                text: 'Male',
            },
            {
                id: Gender.FEMALE,
                text: 'Female',
            },
        ];
    }
}

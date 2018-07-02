import 'reflect-metadata';

const forSubmitTransformer = Symbol('ForSubmitTransformer');

// tslint:disable:function-name
export function ForSubmit(yes: boolean = true): Function {
    return Reflect.metadata(forSubmitTransformer, yes);
}

export function getForSubmitMetadata(target: any): boolean {
    return Reflect.getMetadata(forSubmitTransformer, target.constructor);
}

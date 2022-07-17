type AnyObject = {
    [key : string]: any
};

type ObjectWithStringValues = {
    [key : string]: string
};

// Reference for below types (it has been adapted for typing errors object in model validation)
// https://stackoverflow.com/questions/55479658/how-to-create-a-type-excluding-instance-methods-from-a-class-in-typescript

type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type OptionalNonFunctionPropertiesToStringArray<T> = {
    // eslint-disable-next-line no-unused-vars
    [K in keyof Pick<T, NonFunctionPropertyNames<T>>]?: string[]
};

// eslint-disable-next-line no-unused-vars
type HTMLInputElementValueTransformer = ( x : string ) => any;

export {
    AnyObject,
    ObjectWithStringValues,
    FunctionPropertyNames,
    NonFunctionPropertyNames,
    NonFunctionProperties,
    OptionalNonFunctionPropertiesToStringArray,
    HTMLInputElementValueTransformer
};

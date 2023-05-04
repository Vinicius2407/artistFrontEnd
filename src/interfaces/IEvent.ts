export interface IEvent {
    eventName: string;
    description: string;
    dateBegin: Date;
    dateEnd: Date;
    address: {
        cep: string;
        number: number;
        street: string;
        neighborhood: string;
        city: string;
        country: string};
    category: string[]
}
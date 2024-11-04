export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    phone: string;
    address: {
        geolocation: {
            lat: string;
            long: string;
        };
        city: string;
        street: string;
        number: string;
        zipcode: string;
    };
    __v: number;
}
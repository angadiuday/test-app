export interface User {
    name: string;
    email: string;
    gender: string;
    phoneNumber: string;
    address: Address[];
    // qualifications: Qualification[];
}

export interface Address {
    line1: string;
    line2: string;
    city: string;
    country: string;
}

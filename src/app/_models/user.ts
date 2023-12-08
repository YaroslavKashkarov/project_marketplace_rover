export interface User {
    id: string;
    profilePhoto: string;
    lastVisited: Date;
    email: string;
    firstName: string;
    lastName: string;
    source: string;
    verified: boolean;
}
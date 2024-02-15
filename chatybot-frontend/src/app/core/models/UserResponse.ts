
import { TokensResponse } from "./TokensResponse";

export interface UserResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    picture: string;
    provider: string;
    role: string;
    token:TokensResponse;
}
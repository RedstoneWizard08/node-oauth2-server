import { OAuthError } from "./oauth-error.js";

export class InvalidGrantError extends OAuthError {
    constructor(message: string) {
        super(message, 400);
    }
}

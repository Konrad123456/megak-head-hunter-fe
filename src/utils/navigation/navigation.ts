import {Roles, User} from "../../store/auth/types";

export const navigateToDefaultRoute = (user: User): string => {
    switch (user.role) {
        case Roles.ADMIN: {
            return '/admin';
        }
        case Roles.HR: {
            return '/human-resources';
        }
        case Roles.STUDENT:
        default: {
            return '/user';
        }
    }
}
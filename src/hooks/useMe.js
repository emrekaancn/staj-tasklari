import { mockUsers } from "../data/mockUsers";

export function useMe() {
    const me = mockUsers[0];
    return {
        me,
    };
}
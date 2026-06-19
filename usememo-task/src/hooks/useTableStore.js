import { useMemo } from "react";
import { mockTasks } from "../data/mockTasks";

export function useTableStore(search){
    const FilteredTasks = useMemo(() => {
        return mockTasks.filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
    );
    }, [search]);

    return {
        FilteredTasks,
    };
}

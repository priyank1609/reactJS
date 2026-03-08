export const generateTodos = (count = 10000) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        text: `Todo Task ${i + 1}`,
        completed: false,
    }));
};
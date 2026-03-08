import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo }) => {
    const parentRef = useRef(null);

    const virtualizer = useVirtualizer({
        count: todos.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 50,
        overscan: 5,
    });

    const visualItems = virtualizer.getVirtualItems();
    const visualHeights = virtualizer.getTotalSize();

    return (
        <div
            ref={parentRef}
            style={{
                height: "500px",
                overflow: "auto",
                border: "1px solid #ccc",
            }}
        >
            <div
                style={{
                    height: visualHeights,
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${visualItems[0]?.start ?? 0}px)`,
                    }}
                >
                    {visualItems.map((virtualRow) => {
                        const todo = todos[virtualRow.index];

                        return (
                            <div
                                key={virtualRow.key}
                                data-index={virtualRow.index}
                                ref={virtualizer.measureElement}
                            >
                                <TodoItem todo={todo} onToggle={toggleTodo} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
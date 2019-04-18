import React from "react";
import { Card } from "../card/card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { LIST_CARDS } from "../../constants";
import s from "./list.module.css";

export function List() {
  function onDragEnd() {}
  return (
    <div className={s.list}>
      <DragDropContext onDragEnd={() => onDragEnd}>
        <Droppable droppableId="card">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {LIST_CARDS.map(el => (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  avatar={el.avatar}
                  description={el.description}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

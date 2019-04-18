import React from "react";
import { Draggable } from "react-beautiful-dnd";
import s from "./card.module.css";

interface PropsType {
  id: number;
  avatar: string;
  name: string;
  description: string;
}

export const Card = ({
  id,
  avatar,
  name,
  description
}: PropsType): JSX.Element => {
  return (
    <Draggable draggableId={name} index={id}>
      {provided => (
        <div
          className={s.item}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={s.leftSide}>
            <div>
              <img src={avatar} className={s.avatar} />
            </div>
          </div>
          <div className={s.rightSide}>
            <div className={s.description}>{description}</div>
            <div className={s.bottom}>
              <div className={s.id}>(id: {id})</div>
              <div className={s.name}>{name}</div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

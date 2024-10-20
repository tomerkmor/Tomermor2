import { useState } from "react";
import classes from "./Player.module.css";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className={classes["player-name"]}>{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} maxLength={12}/>
    );
  }

  return (
    <li
      className={`${classes.player} ${
        isActive ? classes.active : classes.nonActive
      }`}
    >
      <span className={classes["name-container"]}>
        {editablePlayerName}
        <span className={classes["player-symbol"]}>{symbol}</span>
      </span>

      <button className={classes.editButton} onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

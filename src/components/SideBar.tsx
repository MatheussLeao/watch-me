import { SideBarProps } from "../types";
import { Button } from "./Button";

export function SideBar (props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {
          props.genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClick(genre.id)}
              selected={props.selected === genre.id}
            />
          ))
        }
      </div>
    </nav>
  );
}

import * as React from "react";
import { IRobot } from "../containers/App";
import Card from "./Card";

const CardList = ({ robots }: { robots: IRobot[] }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

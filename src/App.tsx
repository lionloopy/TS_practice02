import * as React from "react";

import { Profile } from "./components/study/Profile";
import { Counter } from "./components/study/Counter";
import Todolist from "./components/study/Todolist";

const App = () => {
  return (
    <div>
      <Profile name="name" job="job" />
      <Counter />
      <Todolist />
    </div>
  );
};

export default App;

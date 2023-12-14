/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useAtom } from "jotai";

import { nameAtom } from "./atoms.js";

function Use1() {
  const name = useAtom(nameAtom);

  return <h1>Hello {name}!</h1>;
}

export default Use1;

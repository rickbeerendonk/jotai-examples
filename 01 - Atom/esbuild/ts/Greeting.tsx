/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useAtom } from "jotai";

import { nameAtom } from "./atoms.ts";

function Greeting() {
  const name = useAtom(nameAtom);

  return <h1>Hello {name}!</h1>;
}

export default Greeting;
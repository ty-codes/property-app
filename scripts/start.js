/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import execa from "execa";

console.log(typeof(execa))

await execa("yarn", ["workspace", "app", "run", "start"], {
  stdio: "inherit",
});

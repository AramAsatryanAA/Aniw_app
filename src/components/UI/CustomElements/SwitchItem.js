"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

function SwitchItem({ label, defaultChecked }) {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <Switch.Group>
      <div className="flex w-full items-center justify-between">
        <Switch.Label className="text-sm">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100 dark:bg-custom-black-500"
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full  transition-transform ${
              enabled
                ? "translate-x-2 bg-custom-blue-100"
                : "-translate-x-2 bg-custom-gray-700"
            } `}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default SwitchItem;

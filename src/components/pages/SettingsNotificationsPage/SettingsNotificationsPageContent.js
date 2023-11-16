"use client";

import ToggleItem from "@/components/UI/CustomElements/SwitchItem";

const messagesNotificationsSettingsItems = [
  { label: "Email", defaultChecked: false },
  { label: "Push", defaultChecked: true },
];

const activityNotificationsSettingsItems = [
  { label: "Community alerts", defaultChecked: true },
  {
    label: "Comments on your posts",
    defaultChecked: true,
  },
  {
    label: "Upvotes on your posts",
    defaultChecked: false,
  },
  {
    label: "Upvotes on your comments",
    defaultChecked: false,
  },
  {
    label: "Replies on your comments",
    defaultChecked: false,
  },
  {
    label: "Downloads on your products",
    defaultChecked: true,
  },
  {
    label: "Purchase on your products",
    defaultChecked: false,
  },
];

function SettingsNotificationsPageContent() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="border-y border-custom-gray-300 pb-10 pt-6 dark:border-custom-black-300">
        <h3 className="mb-8 text-base font-semibold">Messages</h3>
        <div className="flex max-w-[270px] flex-col gap-10">
          {messagesNotificationsSettingsItems.map((item) => (
            <ToggleItem
              key={item.label}
              label={item.label}
              defaultChecked={item.defaultChecked}
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          <h3 className="mb-8 text-base font-semibold">Activity</h3>
          <div className="flex max-w-[270px] flex-col gap-10">
            {activityNotificationsSettingsItems.map((item) => (
              <ToggleItem
                key={item.label}
                label={item.label}
                defaultChecked={item.defaultChecked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsNotificationsPageContent;

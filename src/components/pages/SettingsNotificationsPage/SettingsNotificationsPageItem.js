function SettingsNotificationsPageItem({ item }) {
  const { id, title, defaultChecked } = item;
  return (
    <div className="flex max-w-[270px] flex-col gap-10">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm">{title}</span>
        <label
          htmlFor={id}
          className="relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100 dark:bg-custom-black-500"
        >
          <input
            type="checkbox"
            id={id}
            className="peer sr-only"
            defaultChecked={defaultChecked}
          />
          <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5 peer-checked:bg-custom-blue-100" />
        </label>
      </div>
    </div>
  );
}

export default SettingsNotificationsPageItem;

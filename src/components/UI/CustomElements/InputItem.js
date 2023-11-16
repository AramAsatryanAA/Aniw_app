function InputItem({ id, label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="input-type lg:w-[492px]"
      />
    </div>
  );
}

export default InputItem;

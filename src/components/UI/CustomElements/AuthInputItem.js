function AuthInputItem({ id, label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="input-type"
      />
    </div>
  );
}

export default AuthInputItem;

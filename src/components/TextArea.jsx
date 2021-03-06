function TextArea(props) {
  return (
    <textarea
      type="text"
      placeholder={props.placeholder || ""}
      value={props.value}
      onChange={props.onChange}
      className="mt-2 h-96 w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-50 px-3 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
    />
  );
}

export default TextArea;

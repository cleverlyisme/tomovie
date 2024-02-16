export const InlineError = ({ text }) => {
  return (
    <div className="text-red-600 w-full mt-2 text-xs font-medium">
      <p>{text}</p>
    </div>
  );
};

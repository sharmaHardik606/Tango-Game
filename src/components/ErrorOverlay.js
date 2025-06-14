export default function ErrorOverlay({
  row,
  col,
  horizontalRule,
  verticalRule,
  ruleViolations
}) {
  const isHorizontalViolation = ruleViolations.some(
    v => !v.vertical && v.row === row && v.col === col
  );

  const isVerticalViolation = ruleViolations.some(
    v => v.vertical && v.row === row && v.col === col
  );

  return (
    <>
      {/* Horizontal Rule */}
      {col < 5 && horizontalRule && (
        <div className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-2xl px-1 text-lg z-10 font-bold ${
          isHorizontalViolation ? "bg-red-200 text-red-800" : "bg-white"
        }`}>
          {horizontalRule}
        </div>
      )}

      {/* Vertical Rule */}
      {row < 5 && verticalRule && (
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-2xl px-1 text-lg z-10 font-bold ${
          isVerticalViolation ? "bg-red-200 text-red-800" : "bg-white"
        }`}>
          {verticalRule}
        </div>
      )}
    </>
  );
}

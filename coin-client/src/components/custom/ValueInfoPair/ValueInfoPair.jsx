const ValueInfoPair = ({ info, value, className = "" }) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <p className="text-[var(--muted-foreground)] font-semibold text-sm">
        {info}
      </p>
      <p
        className={`${
          parseFloat(value) > 0
            ? "text-[var(--chart-5)]"
            : parseFloat(value) < 0
            ? "text-[var(--destructive)]"
            : "text-white"
        }`}
      >{`${value.toFixed(2)}%`}</p>
    </div>
  );
};

export default ValueInfoPair;

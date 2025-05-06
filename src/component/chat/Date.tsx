const DateSeparator = ({ label }: { label: string }) => (
    <div style={{ textAlign: "center", color: "#ccc", margin: "20px 0", fontSize: "14px", position: "relative" }}>
      <div style={{ borderTop: "1px solid #eee", position: "absolute", top: "50%", left: 0, right: 0, zIndex: 0 }}></div>
      <span style={{ backgroundColor: "#fff", padding: "0 10px", zIndex: 1, position: "relative" }}>{label}</span>
    </div>
  );

export default DateSeparator;
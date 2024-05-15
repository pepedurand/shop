interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  gap?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export function Flex({
  children,
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  wrap = "nowrap",
  gap,
}: FlexProps) {
  return (
    <div
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap: gap ? `${gap}px` : undefined,
      }}
    >
      {children}
    </div>
  );
}

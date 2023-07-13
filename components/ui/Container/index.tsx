import { cn } from "@/lib/utils";
import * as React from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container(props: IProps) {
  const { children, className } = props;
  return <div className={cn("px-[10%]", className)}>{children}</div>;
}

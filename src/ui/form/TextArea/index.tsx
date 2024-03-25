import { cn } from "@/utils/styles";
import React from "react";

interface IText extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const TextArea = ({ className, ...rest }: IText) => {
  return (
    <textarea
      className={cn(
        `outline-none w-full dark:bg-brand_black-500 p-4 rounded-xl border ${className}`
      )}
      rows={6}
      {...rest}
    />
  );
};

export default TextArea;

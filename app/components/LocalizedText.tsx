"use client";

import React from "react";
import { useSiteLanguage } from "./siteLanguage";

type LocalizedTextProps = {
  as?: keyof JSX.IntrinsicElements;
  th?: React.ReactNode;
  en?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export default function LocalizedText({
  as = "span",
  th,
  en,
  className,
  children,
  ...rest
}: LocalizedTextProps) {
  const { language } = useSiteLanguage();
  const Tag = as as any;
  const content = children ?? (language === "th" ? th : en);

  return (
    <Tag className={className} {...rest}>
      {content}
    </Tag>
  );
}

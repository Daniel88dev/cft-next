import { AnimationProps } from "framer-motion";
import React, { ReactNode } from "react";

export type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export type BeamType = {
  top: number;
  left: number;
  transition?: AnimationProps["transition"];
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

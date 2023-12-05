import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface DynamicModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onOpenChange?: () => void;
  title: string;
  content: string;
}
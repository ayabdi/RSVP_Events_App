import { PlusCircleIcon, TrashIcon , PencilIcon} from "@heroicons/react/solid";
import { createElement, FC, SVGProps } from "react";

interface IconButtonProps {
  onClick: () => void;
  icon : string
  size?: string
}
export const IconButton: FC<IconButtonProps> = (props): JSX.Element => {
  const { onClick , icon , size} = props;
  return (
    <>
      <div className="flex justify-end">
        {createElement(keyToIconMap[icon], { role:"plus-icon",
          className:`cursor-pointer ${size ? size : 'h-8'} text-purple-900 hover:text-opacity-80 z-10`,
          onClick: onClick })}
      </div>
    </>
  );
};

const keyToIconMap :  { [key: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element} = {
  add :  PlusCircleIcon,
  delete: TrashIcon,
  edit: PencilIcon
}
// const Square = ({
//                     row,
//                     col,
//                     value,
//                     region,
//                     onPointerDown,
//                     onPointerEnter,
//                     onPointerUp,
//                     boardSize,
//                     colorRegions,
//                     regionColors,
//                     isClashing,
//                     showLetter,
//                     queenSize = "24",
//                     ...props
//                 }: SquareProps) => {

import SolveStep, {SolveStepProps} from "@/components/SolveStep.tsx";

export interface SolveStepListProps {
    steps: SolveStepProps[];
    id: string;
    title: string;
    description: string;
}


function SolveStepList  (params: SolveStepListProps)  {
  const itemsList = params.steps.map((item, index) => {
      return <div><SolveStep action={item.action} techniqueName={item.techniqueName} items={item.items} stepNumber={index+1}></SolveStep></div>;
  });

    return (
        <div
            className="self-start mt-6 mb-16 max-w-md md:max-w-lg mx-2"

        >
            <div className="font-medium mb-3">STUFF</div>
            <span className="space-y-2">
                {itemsList}
            </span>
        </div>
  );
}

export default SolveStepList;

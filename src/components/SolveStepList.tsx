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

import {SolveStepProps} from "@/components/SolveStep.tsx";

export interface SolveStepListProps {
    steps: SolveStepProps[];
    id: string;
    title: string;
    description: string;

}

//
// function SolveStepList  (params: SolveStepListProps)  {
//   const itemsList = params.steps.map((item, index) => {
//       return <div><SolveStep action={item.action} techniqueName={item.techniqueName} items={item.items} stepNumber={index+1}></SolveStep></div>;
//   });
//
//     return (
//         <div
//             className="self-start mt-6 mb-16 max-w-md md:max-w-lg mx-2"
//
//         >
//             <div className="font-medium mb-3">STUFF</div>
//             <span className="space-y-2">
//                 {itemsList}
//             </span>
//         </div>
//   );
// }

function SolveStepList({ steps, title, description }: SolveStepListProps) {
    return (
        <div className="self-start mt-6 mb-16 max-w-2xl mx-auto px-4">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600 mb-6">{description}</p>
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
                    >
                        <h3 className="font-semibold text-lg mb-3 text-gray-700">
                            Step {step.stepNumber}: {step.action}
                            <span className="text-sm text-gray-500"> (Technique: {step.techniqueName})</span>
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            {step.items.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-600">
                                    <span className="font-mono text-gray-800">
                                        {item.coords || ``}
                                    </span>{" "}
                                    - {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SolveStepList;

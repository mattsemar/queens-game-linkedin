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

export interface SolveStepProps {
    action: "Mark X" | "Place Q";
    techniqueName: string;
    items: string[];
    stepNumber: number;
    [key: string]: any; // For additional props
}


function SolveStep  (params: SolveStepProps)  {
  const itemsList = params.items.map((item, index) => {
    return <span key={index}>{item}</span>;
  });
    return (
        <span><h1>Step {params.stepNumber}</h1>
            <h2>
            <b>{params.action}</b> ({params.techniqueName})
                </h2>
      {/*<ul>*/}
        {itemsList}

      {/*</ul>*/}

        </span>


  );
}

export default SolveStep;

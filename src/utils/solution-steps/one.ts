import {SolveStepListProps} from "@/components/SolveStepList.tsx";

const solution1: SolveStepListProps = {
    id: 'solution-1',
    title: 'Solution 1',
    description: 'This is the first solution step.',
    steps: [
        {
            action: 'Mark X',
            techniqueName: 'find_pairs_with_only_2_possibles',
            items: [`(  2,  3,  A) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating A outside of those rows`,
'\t\t(  4,  3,  A) \trows 1 and 2 are limited to 2 possible colors {\'B\', \'A\'}, eliminating A outside of those rows\n'
            ]
        },
        {
            action: 'Mark X',
            techniqueName: 'Next Placement',
            items: ['(1,2)']
        }
    ]

}

export default solution1;

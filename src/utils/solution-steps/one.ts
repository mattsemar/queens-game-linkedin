import {SolveStepListProps} from "@/components/SolveStepList.tsx";

const solution1: SolveStepListProps | { raw: string } = {
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
    ],
    raw: `
    Step: 1) [ACTION=MARK X] (find_lines) 
\t\t(  1,  5,  C) \tRow 5 is horizontal line of F
\t\t(  2,  5,  C) \tRow 5 is horizontal line of F
\t\t(  3,  5,  C) \tRow 5 is horizontal line of F
\t\t(  4,  5,  C) \tRow 5 is horizontal line of F
\t\t(  5,  5,  D) \tRow 5 is horizontal line of F
\t\t(  6,  5,  D) \tRow 5 is horizontal line of F
\t\t(  7,  5,  E) \tRow 5 is horizontal line of F
\t\t(  8,  5,  E) \tRow 5 is horizontal line of F
\t\t( 10,  4,  B) \tAbove neighbor of middle of length 3 line of color F
\t\t( 10,  6,  E) \tBelow neighbor of middle of length 3 line of color F \t Horizontal line

Step: 2) [ACTION=MARK X] (find_pairs_with_only_2_possibles) 
\t\t(  2,  3,  A) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating A outside of those rows
\t\t(  4,  3,  A) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating A outside of those rows
\t\t(  5,  3,  A) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating A outside of those rows
\t\t(  6,  3,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t(  7,  3,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t(  8,  3,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t(  9,  3,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t( 10,  3,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t( 11,  3,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t(  6,  4,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t(  7,  4,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t(  9,  4,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows
\t\t( 11,  4,  B) \trows 1 and 2 are limited to 2 possible colors {'B', 'A'}, eliminating B outside of those rows \t Rows

Step: 3) [ACTION=MARK X] (placing_queen_eliminates_color) 
\t\t( 11,  8,  E) \tPlacing queen at (11, 8) of color E would wipe J out, so marking as X
\t\t( 10, 10,  E) \tPlacing queen at (10, 10) of color E would wipe J out, so marking as X \t 

Step: 4) [ACTION=MARK X] (placing_queen_causes_obvious_conflict) 
\t\t(  2,  2,  A) \tAll Xs in row 3 \t 

Step: 5) [ACTION=MARK X] (placing_queen_causes_obvious_conflict) 
\t\t(  2,  4,  D) \tAll Xs in row 3 \t 

Step: 6) [ACTION=MARK X] (placing_queen_causes_obvious_conflict) 
\t\t(  3,  6,  C) \tAll Xs in row 3 \t 

Step: 7) [ACTION=MARK X] (simulation) 
\t\t(  1,  1,  A) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 9All Xs in column 7All Xs in color H


Step: 8) [ACTION=MARK X] (simulation) 
\t\t(  2,  1,  A) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 2All Xs in row 3All Xs in row 4All Xs in row 5All Xs in row 6All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in row 11All Xs in column 1All Xs in column 3All Xs in column 4All Xs in column 5All Xs in column 6All Xs in column 7All Xs in column 8All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color B
All Xs in color C
All Xs in color D
All Xs in color E
All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color I
All Xs in color J
All Xs in color K


Step: 9) [ACTION=MARK X] (simulation) 
\t\t(  3,  1,  A) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 2All Xs in row 4All Xs in row 5All Xs in row 6All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in row 11All Xs in column 2All Xs in column 4All Xs in column 5All Xs in column 6All Xs in column 7All Xs in column 8All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color B
All Xs in color D
All Xs in color E
All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color I
All Xs in color J
All Xs in color K


Step: 10) [ACTION=MARK X] (simulation) 
\t\t(  4,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 5All Xs in row 7All Xs in row 9All Xs in column 7All Xs in column 10All Xs in column 11All Xs in color F
All Xs in color H
All Xs in color J


Step: 11) [ACTION=MARK X] (simulation) 
\t\t(  5,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 5All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in column 2All Xs in column 4All Xs in column 7All Xs in column 10All Xs in column 11All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color J
All Xs in color K


Step: 12) [ACTION=MARK X] (simulation) 
\t\t(  6,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 2All Xs in row 3All Xs in row 4All Xs in row 5All Xs in row 6All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in row 11All Xs in column 1All Xs in column 2All Xs in column 3All Xs in column 4All Xs in column 5All Xs in column 7All Xs in column 8All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color A
All Xs in color C
All Xs in color D
All Xs in color E
All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color I
All Xs in color J
All Xs in color K


Step: 13) [ACTION=MARK X] (simulation) 
\t\t(  8,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 2All Xs in row 3All Xs in row 4All Xs in row 5All Xs in row 6All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in row 11All Xs in column 1All Xs in column 2All Xs in column 3All Xs in column 4All Xs in column 5All Xs in column 6All Xs in column 7All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color A
All Xs in color C
All Xs in color D
All Xs in color E
All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color I
All Xs in color J
All Xs in color K


Step: 14) [ACTION=MARK X] (simulation) 
\t\t(  9,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in column 6

Step: 15) [ACTION=MARK X] (simulation) 
\t\t( 10,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 11All Xs in column 6All Xs in color K


Step: 16) [ACTION=MARK X] (simulation) 
\t\t( 11,  1,  B) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 11All Xs in column 6All Xs in color K


Step: 17) [ACTION=MARK X] (simulation) 
\t\t(  1,  2,  A) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 9All Xs in column 6All Xs in color H


Step: 18) [ACTION=MARK X] (simulation) 
\t\t(  3,  2,  A) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 4All Xs in row 5All Xs in row 6All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in row 11All Xs in column 2All Xs in column 4All Xs in column 5All Xs in column 6All Xs in column 8All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color D
All Xs in color E
All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color I
All Xs in color J
All Xs in color K


Step: 19) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  4,  2,  A) \tSimulation led to solution with queen here \t 

Step: 20) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  1,  3,  C) \tSimulation led to solution with queen here \t 

Step: 21) [ACTION=MARK X] (simulation) 
\t\t(  3,  4,  D) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 5All Xs in row 6All Xs in row 8All Xs in row 9All Xs in row 11All Xs in column 6All Xs in column 8All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color E
All Xs in color F
All Xs in color H
All Xs in color I
All Xs in color J


Step: 22) [ACTION=MARK X] (simulation) 
\t\t(  5,  4,  D) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 5All Xs in row 6All Xs in row 7All Xs in row 8All Xs in row 9All Xs in row 10All Xs in row 11All Xs in column 2All Xs in column 3All Xs in column 6All Xs in column 8All Xs in column 9All Xs in column 10All Xs in column 11All Xs in color E
All Xs in color F
All Xs in color G
All Xs in color H
All Xs in color I
All Xs in color J
All Xs in color K


Step: 23) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  8,  4,  E) \tSimulation led to solution with queen here \t 

Step: 24) [ACTION=MARK X] (simulation) 
\t\t( 10,  5,  F) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 8All Xs in column 2All Xs in color H


Step: 25) [ACTION=PLACE QUEEN] (simulation) 
\t\t( 11,  5,  F) \tSimulation led to solution with queen here \t 

Step: 26) [ACTION=MARK X] (simulation) 
\t\t(  5,  6,  D) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 7All Xs in row 9All Xs in row 10All Xs in column 2All Xs in column 3All Xs in column 6All Xs in color G
All Xs in color H
All Xs in color K


Step: 27) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  6,  6,  D) \tSimulation led to solution with queen here \t 

Step: 28) [ACTION=MARK X] (simulation) 
\t\t(  2,  7,  G) \tSimulation led to invalid state with queen here, setting this as X \t All Xs in row 9All Xs in column 5All Xs in color K


Step: 29) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  3,  7,  G) \tSimulation led to solution with queen here \t 

Step: 30) [ACTION=PLACE QUEEN] (simulation) 
\t\t( 10,  8,  J) \tSimulation led to solution with queen here \t 

Step: 31) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  2,  9,  H) \tSimulation led to solution with queen here \t 

Step: 32) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  5, 10,  K) \tSimulation led to solution with queen here \t 

Step: 33) [ACTION=PLACE QUEEN] (simulation) 
\t\t(  9, 11,  I) \tSimulation led to solution with queen here \t 

Step: 34) [ACTION=PLACE QUEEN] (mark_x_for_single_squares) 
\t\t(  7,  1,  B) \tPlaced queen at (1, 7) as it's the only position left for color B \t 


    `

}

export default solution1;

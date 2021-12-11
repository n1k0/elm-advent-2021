module Days.Day4 exposing (..)

import Html exposing (..)


type alias Bingo =
    { wins : List Win
    , grids : List Grid
    }


type alias Win =
    { gridId : GridId
    , score : Score
    }


type alias Grid =
    { id : GridId
    , cells : List (List ( Number, Bool ))
    }


type alias Number =
    Int


type alias GridId =
    Int


type alias Score =
    Int


part1 : Result String Score
part1 =
    runBingo (List.reverse >> List.head)


part2 : Result String Score
part2 =
    runBingo List.head


runBingo : (List Win -> Maybe Win) -> Result String Score
runBingo selectWin =
    let
        ( numbers, grids ) =
            parseInputs sampleData

        bingo =
            { wins = [], grids = grids }
    in
    numbers
        |> List.foldl fillGridsWithNumber bingo
        |> .wins
        |> selectWin
        |> Maybe.map .score
        |> Result.fromMaybe "Nobody won :("


fillGridsWithNumber : Int -> Bingo -> Bingo
fillGridsWithNumber num { grids, wins } =
    let
        filledGrids =
            grids |> List.map (fillGrid num)
    in
    { grids = filledGrids
    , wins = filledGrids |> List.foldl (checkWinningGrid num) wins
    }


fillGrid : Int -> Grid -> Grid
fillGrid num grid =
    let
        updateCell =
            List.map
                (\( int, checked ) ->
                    ( int, checked || num == int )
                )
    in
    { grid | cells = grid.cells |> List.map updateCell }


checkWinningGrid : Number -> Grid -> List Win -> List Win
checkWinningGrid num grid wins =
    let
        checkLine =
            List.any (List.all Tuple.second)

        winning =
            checkLine grid.cells || checkLine (rotate grid.cells)
    in
    if winning && (wins |> List.map .gridId |> List.member grid.id |> not) then
        { gridId = grid.id
        , score = num * countUnchecked grid
        }
            :: wins

    else
        wins


countUnchecked : Grid -> Int
countUnchecked { cells } =
    cells
        |> List.map
            (List.filter (Tuple.second >> not)
                >> List.map Tuple.first
            )
        |> List.concat
        |> List.sum


parseInputs : String -> ( List Int, List Grid )
parseInputs string =
    let
        lines =
            string
                |> String.trim
                |> String.lines

        numbers =
            lines
                |> List.head
                |> Maybe.map (parseInts ",")
                |> Maybe.withDefault []

        grids =
            lines
                |> List.drop 2
                |> List.map String.trim
                |> String.join "\n"
                |> String.split "\n\n"
                |> List.indexedMap parseGrid
    in
    ( numbers, grids )


parseInts : String -> String -> List Int
parseInts sep string =
    string
        |> String.trim
        |> String.split sep
        |> List.filterMap (String.trim >> String.toInt)


parseGrid : GridId -> String -> Grid
parseGrid gridId string =
    { id = gridId
    , cells =
        string
            |> String.lines
            |> List.map
                (parseInts " "
                    >> List.map (\int -> ( int, False ))
                )
    }



-- List helpers


rotate : List (List a) -> List (List a)
rotate matrix =
    matrix
        |> List.foldr (List.map2 (::))
            (List.repeat
                (case matrix of
                    [] ->
                        0

                    m :: _ ->
                        List.length m
                )
                []
            )



-- Answer


answer : String
answer =
    String.join "\n"
        [ "Part1: "
            ++ (case part1 of
                    Ok result ->
                        String.fromInt result

                    Err error ->
                        "Error: " ++ error
               )
        , "Part2: "
            ++ (case part2 of
                    Ok result ->
                        String.fromInt result

                    Err error ->
                        "Error: " ++ error
               )
        ]


pitch : String
pitch =
    """
--- Day 4: Giant Squid ---

You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.

Maybe it wants to play bingo?

Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)

The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:

    7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

    22 13 17 11  0
     8  2 23  4 24
    21  9 14 16  7
    6 10  3 18  5
     1 12 20 15 19

     3 15  0  2 22
     9 18 13 17  5
    19  8  7 25 23
    20 11 10 24  4
    14 21 16 12  6

    14 21 17 24  4
    10 16 15  9 19
    18  8 23 26 20
    22 11 13  6  5
     2  0 12  3  7

After the first five numbers are drawn (`7`, `4`, `9`, `5`, and `11`), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):

    22 13  17 [11]  0          3  15   0  2  22        14  21  17 24  [4]
     8  2  23  [4] 24         [9] 18  13  17 [5]       10  16  15 [9] 19
    21 [9] 14  16  [7]        19   8  [7] 25 23        18   8  23 26  20
     6 10  3   18  [5]        20 [11] 10  24 [4]       22 [11] 13  6  [5]
     1 12  20  15  19         14  21  16  12  6         2   0  12  3  [7]

After the next six numbers are drawn (`17`, `23`, `2`, `0`, `14`, and `21`), there are still no winners:

     22  13  [17] [11]  0       3   15  [0] [2] 22     [14] [21] [17] 24  [4]
      8  [2] [23]  [4] 24      [9]  18  13 [17]  5      10   16   15  [9] 19
    [21] [9] [14]  16  [7]     19    8  [7] 25 [23]     18    8  [23] 26  20
      6  10    3   18  [5]     20  [11] 10  24  [4]     22  [11]  13   6  [5]
      1  12   20   15  19     [14] [21] 16  12   6      [2]  [0]  12   3  [7]

Finally, 24 is drawn:

     22  13  [17] [11]  0       3   15  [0] [2] 22     [14] [21] [17] [24] [4]
      8  [2] [23]  [4] 24      [9]  18  13 [17]  5      10   16   15   [9] 19
    [21] [9] [14]  16  [7]     19    8  [7] 25 [23]     18    8  [23]  26  20
      6  10    3   18  [5]     20  [11] 10 [24] [4]     22  [11]  13    6  [5]
      1  12   20   15  19     [14] [21] 16  12   6      [2]  [0]  12    3  [7]

At this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: `14 21 17 24 4`).

The score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is `188`. Then, multiply that sum by the number that was just called when the board won, `24`, to get the final score, `188` * `24` = `4512`.

To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
"""


sampleData : String
sampleData =
    """
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
"""


day : { pitch : String, answer : String }
day =
    { pitch = pitch
    , answer = answer
    }

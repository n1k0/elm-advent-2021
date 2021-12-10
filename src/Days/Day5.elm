module Days.Day5 exposing (..)

import Html exposing (..)


type alias Vec =
    { from : Point, to : Point }


type alias Point =
    { x : Int, y : Int }


type alias Map =
    List (List Cell)


type alias Cell =
    { coords : Point, state : Int }


part1 : String
part1 =
    -- Note: data is the provided input string
    sampleData
        |> parseVecs
        |> excludeDiagonals
        |> toMap
        -- |> drawMap
        |> countOverlaps
        |> String.fromInt


parseVecs : String -> List Vec
parseVecs string =
    string
        |> String.trim
        |> String.lines
        |> List.map
            (String.split " -> "
                >> List.map
                    (String.split ","
                        >> List.filterMap String.toInt
                    )
            )
        |> List.filterMap toVec


excludeDiagonals : List Vec -> List Vec
excludeDiagonals =
    List.filter (\{ from, to } -> from.x == to.x || from.y == to.y)


toMap : List Vec -> Map
toMap vecs =
    vecs |> List.foldl processVec (initMap vecs)


initMap : List Vec -> Map
initMap vecs =
    let
        findMax getter =
            List.concat
                [ List.map (.from >> getter) vecs
                , List.map (.to >> getter) vecs
                ]
                |> List.maximum
                |> Maybe.withDefault 0

        ( xMax, yMax ) =
            ( findMax .x, findMax .y )
    in
    List.range 0 yMax
        |> List.map
            (\y ->
                List.range 0 xMax
                    |> List.indexedMap
                        (\x _ -> { coords = Point x y, state = 0 })
            )


updateMap : Point -> (Cell -> Cell) -> Map -> Map
updateMap p update =
    List.indexedMap
        (\y row ->
            if y == p.y then
                row
                    |> List.indexedMap
                        (\x cell ->
                            if x == p.x then
                                update cell

                            else
                                cell
                        )

            else
                row
        )


countOverlaps : Map -> Int
countOverlaps =
    List.map
        (List.map .state
            >> List.filter (\s -> s >= 2)
            >> List.length
        )
        >> List.sum


processVec : Vec -> Map -> Map
processVec { from, to } map =
    let
        incCellState cell =
            { cell | state = cell.state + 1 }
    in
    if from.x == to.x then
        List.range (min from.y to.y) (max from.y to.y)
            |> List.foldl
                (\y_ -> updateMap { x = from.x, y = y_ } incCellState)
                map

    else if from.y == to.y then
        List.range (min from.x to.x) (max from.x to.x)
            |> List.foldl
                (\x_ -> updateMap { x = x_, y = from.y } incCellState)
                map

    else
        map


drawMap : Map -> String
drawMap map =
    map
        |> List.map (List.map (.state >> String.fromInt) >> String.join "")
        |> String.join "\n"


toVec : List (List Int) -> Maybe Vec
toVec raw =
    case raw of
        [ [ x1, y1 ], [ x2, y2 ] ] ->
            Just { from = Point x1 y1, to = Point x2 y2 }

        _ ->
            Nothing



-- Answer


answer : String
answer =
    String.join "\n"
        [ "Part1: " ++ part1
        , "Part2: TODO"
        ]


sampleData : String
sampleData =
    """
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
"""


pitch : String
pitch =
    """
--- Day 5: Hydrothermal Venture ---

You come across a field of hydrothermal vents on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.

They tend to form in lines; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:

    0,9 -> 5,9
    8,0 -> 0,8
    9,4 -> 3,4
    2,2 -> 2,1
    7,0 -> 7,4
    6,4 -> 2,0
    0,9 -> 2,9
    3,4 -> 1,4
    0,0 -> 8,8
    5,5 -> 8,2

Each line of vents is given as a line segment in the format `x1,y1 -> x2,y2` where `x1,y1` are the coordinates of one end the line segment and `x2,y2` are the coordinates of the other end. These line segments include the points at both ends. In other words:

- An entry like `1,1 -> 1,3` covers points `1,1`, `1,2`, and `1,3`.
- An entry like `9,7 -> 7,7` covers points `9,7`, `8,7`, and `7,7`.

For now, only consider horizontal and vertical lines: lines where either `x1 = x2` or `y1 = y2`.

So, the horizontal and vertical lines from the above list would produce the following diagram:

    .......1..
    ..1....1..
    ..1....1..
    .......1..
    .112111211
    ..........
    ..........
    ..........
    ..........
    222111....

In this diagram, the top left corner is `0,0` and the bottom right corner is `9,9`. Each position is shown as the number of lines which cover that point or `.` if no line covers that point. The top-left pair of `1`s, for example, comes from `2,2 -> 2,1`; the very bottom row is formed by the overlapping lines `0,9 -> 5,9` and `0,9 -> 2,9`.

To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a `2` or larger - a total of `5` points.

Consider only horizontal and vertical lines. At how many points do at least two lines overlap?
"""


day : { pitch : String, answer : String }
day =
    { pitch = pitch
    , answer = answer
    }

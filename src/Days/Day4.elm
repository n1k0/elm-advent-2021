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


data : String
data =
    """
4,75,74,31,76,79,27,19,69,46,98,59,83,23,90,52,87,6,11,92,80,51,43,5,94,17,15,67,25,30,48,47,62,71,85,58,60,1,72,99,3,35,42,10,96,49,37,36,8,44,70,40,45,39,0,63,2,78,68,53,50,77,20,55,38,86,54,93,26,88,12,91,95,34,9,14,33,66,41,13,28,57,29,73,56,22,89,21,64,61,32,65,97,84,18,82,81,7,16,24

30 46 94 20  2
53 67 69 75 65
27 24 85 28 60
57 58 42 36 78
35 98 87 91 93

72 71 91 73 19
 2 13 14  8 74
42 34 31 56  9
82 59 44 67 79
49  6 98 10 30

95 24 25 11 34
57 65 41 92  8
91 26  1 62 38
47 93  4 37  0
15 44 33 20 97

24 69 55  7 25
45 64 56 71 18
94 10 62 19 36
53 74 49 61 80
50 68 60 76 84

86 78 29  1 71
 2  9 24 34 96
47 75 61 13 26
10 66 28 83 14
91 63 45 76 50

61 60 22 11 95
25 81 13 15 53
59 89 65 18 39
58 50  1 47 52
48 16 29 75 56

62  0 93 41 53
69 47 29 50 46
81  8 20 38 23
 4 64  5 37 27
32 75 48 33 15

97 75 15 55 36
98 77 76  3 69
11 39 88 18 93
94 99 59 50 63
33 26 35 58 14

58 91  7 36 81
44 90 46 57 93
16 35 28 61 34
60  3 96 65 14
24 49 94 11 77

 5 91 53 85 36
 6 64 41  7 50
87 94 96 15 49
18 78 37 52 75
28 34 16 71 48

75 14  2 52 49
79 37 13 53 12
91 73 94 72 36
48 54  3 93  5
40 85 42  9 50

26 53 24 58 95
15 54 65 80 30
90 72 27 40 47
81 22 57  1 17
82 46 20 94 49

60 25 86 18 92
 2 85 89  5 55
12 71 74 46 68
33 52 82 84 29
76 43 40 11 31

21 23 93 46 60
99 20 75 55  4
73  9 74 92 16
25 35  0 70 90
27 86 42 94 15

69 73 42 46 53
 5 71 50  6 74
14 44 99 62 87
54 84 86 94 21
29 51 38 67  8

43 28 24 46 22
61 15  4 52 17
62 77 18 56 85
93 60 33 71 41
63  2  6 68 92

60 92 52 36 38
66 34 26 19 25
24 65 90 39 74
17 97 96  7 48
50 55 57 73 64

19 77 60 66 16
41 54  5 49  6
69 61 94 86 98
67 37 87 71 72
44 96 90 40 74

90 49 68 74 32
31 85 42 65 53
76 43 41 36 20
16 75 46 47 86
54 44 95 13 23

56  0 88 99 76
10 42 96 30 14
67 73 16 21 35
80 41 64 40 78
13 19  4 24 20

79 98 28 58 41
24 97 85 22 89
12 81 68 50 47
 2 34 16  6 95
64 51 11 43 26

 6 39 79 95  3
82  9 61 80 33
94 87 13 70 11
 0  8 37 35 19
62 75 84 55 93

44 51 54 27 94
77 32 81 71 62
98 91 68 41 89
 6 39 40 56 53
73 88  5 49 80

97 29 15 61 83
46 69 51 71 17
40 94 49 14 66
52 20 57 62 80
19 72 75 84 36

27 26 95 78 92
98 18 31 51 45
39 43 94 33 13
50 16 71 30 22
70 81 36 38 64

90  7 71 11 63
25 39 61 17 46
51 86 56 81 84
14 33 37 23 60
52 64  8 65 29

41 92 40 71 33
90  2 24 37 25
 0 94 74 53 69
81 61  1 70 88
44 34 99 29 75

63 39 44  3 82
68 95 67 28 49
22 53 76 81 47
15 75  0 54  6
86 37 65 52 77

11 64 39 47 72
97 59 83 19 58
12 65 92 89 28
 9 78 40 79 99
17 50 71 18 68

31 78 27 32 18
97 20 60 68 88
12  5 99 49 82
35  6 87  2 61
70 53 63 36 93

89  4 50 54 80
85 36 17  5 71
44 95 57 73 60
46 92 25  8 59
98 82 21 93 99

27 12 82 95 47
 8 21 69 83 64
11  7 88 26 30
70 96 18 75 53
28 22 56 52 29

56  1 30 13 53
37 86 98 19  9
 3 67 16 71 85
83 79 48 54 14
47 62 44 95 65

51 18 87 35 55
52 85 79 56 82
83 26 24 29 43
80 76  4 45 13
11 12 99 94 47

14  1 52 95 63
54 27 67 92 98
34 61 26 32 33
76 77 49 83  2
97 59 12 71 80

78 16 59 44  5
73 21 53 37 50
25 86 88 61 74
80 30 69 56 57
98 39 26 58 51

71 48 28 14 81
69 67  6 77 47
94 83  8 40 20
30 58  9 99 76
51 24 91 21 52

84 76 33 14 72
37 36 25 12 34
39 54 89 81 30
 2 15 46 10 22
41 75 27 66 69

 8 20 53 16 86
38 99  4 11 60
55 14 47  1 48
51 50 69 52 37
 3 56 32 79 68

69 40 17 70 98
12 86 41 35 50
60 44  8 20 81
14 82 25 55  4
87 67 85  3  5

72 90 14 78 94
 2 85 91 97 42
84  9 27 70 95
55 56 74 73  1
11 59 13 67 18

 5 84 21 73 13
11 46 35 79 99
57 25 48 52  2
51 70 56 54 94
37 62 47 43 41

99 30 74 11 51
48 90  1 27 76
71 63 28 86 10
52  5 83 16 69
70 93 92 73 43

52 70 58 95 82
74 18 90 99 39
12 51 71 48 47
92 11 91 16 61
41 62 97 68  0

20 32 76 50 55
 4 70 14 36 82
74 10 97 26 87
61 83 56 98 71
64 38  8 65 92

63 68 84 36 41
71 44 12 77 50
18 92 54 58 23
89 98 72 69 25
62 38 42  5 52

59 65 60 84 49
51 69 12 15 38
70  1 79 22 35
66 88 85 83 32
 3 33 78 48 16

79 91 35 90 77
22 59 58 96 97
99 84 34  2 74
10 92  5  4 45
53 21 42 71 56

43 23 45 81 34
 1 52  7 24 51
42 22 17 20 77
31 21 29 19 79
58 87 30 60 49

81 64 86 76 70
44 14 43 90  2
96 16 42 22  7
 5 57 19 84 21
95 74 80 28 72

 3 57 12 95 35
61 72 98 39 17
62 87 30 66  4
26 58 16 20 47
37 46 13 42 85

55 24 36 49 85
19 39 88 73 61
 1 60 45 72 29
47 12 53 76 44
28 98 70 54  0

77 29 17 36 96
35 64 93 37 83
12 10 57 82  7
90 69  0 86 32
74 66 72 63 97

53 18 82 30  4
 6 47 28 80 71
39 36 22 20 51
 7 57 26 34 79
72 10 56 89  1

92 20 76 27 51
72 82 39 95 38
19 33 70 62 26
79 99 40 30  8
94 80 10 91  4

56 21 15 54 60
69 64 55  0 59
39 95 98 34 99
24 76  3  6 30
65 45 96 82 26

59 55 44 79 12
87 73 37 76 91
68 92 51 49 36
99 54  3 71 64
25 60 94 45 81

23 67 96 86 98
14 47 45 66 62
73 76 74 54 50
64 60 35 10 58
99 81 34  9 13

71 44 19 13  2
18 80 24 11 85
36  1 99 26 52
48 76 84 88 63
61 30 49 86 35

20 85 55 47 99
18 49 38 65 61
37 48 32  6 15
80 94 66 89 91
 1 44 36 92 21

72 65  4 76 16
80 97 15 56 33
14 40 50 11 57
34 37 68 88 44
 6 38 21 49  7

39 80 87 32 21
41 97 66 15 83
68 69 28 88 62
18  2 48 58 77
63 64 17 13 95

44  3 41 55 85
83 75 13  0 81
95  9 23  8 26
71 94 37 70 45
77 82 62 87 19

65 16 30 91 52
78 67 24 58 11
75 47 90  0  8
83 88 73 60  2
46 59 77 32 19

82 80  0 24 85
92 99 50 94 38
19 98 10 51 32
36 73 67 43 57
46 21 13 69 37

89 94 78  1  9
16 34 18 15 38
69 82 35 92 27
66 64 68 63 26
62 21 65 36 71

15  4 25 50 41
69 98 12 74 21
 2 13 66 55 83
93 90 23 27 33
82 52 68 61 60

57 21 28 29  5
67 35 19 62 68
91 83  3 33 99
20 30 79 50 85
60 89  4  7 36

43  4 81 19 77
89 92 46 52 35
 1 21  2 75 88
 8 97 26 62 71
 9 93 30 50 66

42 46 38 85 82
18 80 91  1 40
72 81 89 51 31
37 20 24 67 92
32 43 95 70 84

90 48 63 15 45
67 52  2 26 31
30 13 36 77 49
60  8 86 70 99
94 27 85 78 34

76 65 22 60 55
81 88 54  4 26
72 39 86 12  8
68 46 98 28 99
45 69 21  7 35

47 22 34 19 95
30 15 39 51 10
11 37 48 44 71
 2 89 92 78 35
21 73 33 20 69

 6 70 84 25  3
21 12 55 78 49
80 60 98 58 83
17 96 69  9 66
76 59 39 86 51

97 60 93 22 99
 2  4 25 45 78
43 53 63 41  6
64 74 16 56 28
77 12 20 35 49

82 10 91 16 77
17 85 48 24  1
61 96 38 68 99
41 42 25 66 56
97 18 63 93 29

95 37 83 61 17
11 15 43  6 24
 0 28 51 87  9
76 52  2 64 32
85 41 99 29  7

11 86  3 39 80
35 78 26 34 65
46 79 44 64 66
29 74 63 20  0
92 28 41 69 50

99 58 15 51 28
 1 36 45 38 34
46 94 35 44 88
39 20  8 59 61
 3  4 37 14 63

31 91 85 61 29
66 54  9 49  2
81 62 70 98 38
68  1 16 95 78
59 52 53 21 36

69 59 50 48 56
17 61 16 92 47
63 60 62  5  3
37 97 38 83 58
73 18 71 19 94

55  9 34 57 85
31 37 30 16 64
44 91 94  6  7
90 87 77 59 50
12 79 43 17 89

90 53 57 28 58
56 49 29  8 12
77 27 62 30 82
71 98 63 37 83
 9 15 84 36 74

80 56 52 44 71
40  5 26 28 46
11 70 57 95 93
85 29 21 84 35
20 15 81 54 91

60 86 80 79 11
90 82 84 48 43
92 81 39 57 47
64 36  4 71  9
78 62 53 51 66

84 51 19 73 55
42 18 75 96  9
47 46 12 98 93
62 57 24  6 74
50 53 30 70 80

57 60  1 49 20
93  0 39  6 74
86  9 56 41 25
53 99 83 38 80
37 79 18 23 45

33 95 37 86 45
62 65 16  3 77
 4 14 82 61 13
18 71 11  8 23
50 67 35 75 76

43 30 48 38 86
62 46 72 21 97
 0 18 91 17 42
 6 99 56 22 64
15 25 79 13 55

54 34 98 43 86
39 47 56 52 95
62 92  6 70 29
65 78 57 99 35
72 55 20 88 77

87 97 67 99 20
58 50 30 78 31
 4  6 96 85 70
80 59 77 88 93
 9  0 90 86  3

18 17 81 50  8
12 62 73 32 72
41 90 42 11 79
 1  7 94 13  0
77 33 23 83 74

71 84 22 14 54
98 34 56 81 33
58 39  6 46 96
15  7 11 13 37
70  5  2  9 68

28 58 11 63 26
 6 14 44 70 93
32 52 60 96  3
76  0 75 66 71
50 54 34 30 98

91 26  2 53 92
45 67 68 32 50
80 30 15 78 73
10 14 28 27  0
21 38 88 22  5

42 11 23 88 41
54 58  8 74 40
 6 13 80 89 82
81  3  5 53 76
47 39  9 25 46

82 14 52 43 95
15 37 12 58 80
64 97 45 61 49
71 65 29 25  9
21 11 51  1 87

20 80 50 27 90
21 35  9 40 81
89 16 26 74 84
29 97 88 19 32
85 63 10 46 52

16 66  0 53 40
94 42 80 86 25
11 15 68 35  5
60 89 41 92 79
51 77 88 36 67

51 65 33 97 81
78 96 86 64 22
10 28 93  2 14
71 29 92  6 62
98 38 35  0 70
"""


day : { pitch : String, answer : String }
day =
    { pitch = pitch
    , answer = answer
    }

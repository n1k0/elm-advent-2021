module Days.Day2 exposing (..)

import Html exposing (..)


type Command
    = Up Int
    | Down Int
    | Forward Int


type alias Position =
    { x : Int, y : Int, aim : Int }


part1 : Int
part1 =
    -- Note: data is the provided input string
    data
        |> process executeCommand1


part2 : Int
part2 =
    -- Note: data is the provided input string
    data
        |> process executeCommand2


executeCommand1 : Command -> Position -> Position
executeCommand1 command pos =
    case command of
        Up int ->
            { pos | y = pos.y - int }

        Down int ->
            { pos | y = pos.y + int }

        Forward int ->
            { pos | x = pos.x + int }


executeCommand2 : Command -> Position -> Position
executeCommand2 command ({ aim } as pos) =
    case command of
        Up int ->
            { pos | aim = aim - int }

        Down int ->
            { pos | aim = aim + int }

        Forward int ->
            { pos | x = pos.x + int, y = pos.y + (aim * int) }


process : (Command -> Position -> Position) -> String -> Int
process exec data_ =
    parseCommands data_
        |> List.foldl exec { x = 0, y = 0, aim = 0 }
        |> (\{ x, y } -> x * y)


createCommand : ( String, Maybe Int ) -> Maybe Command
createCommand ( dir, maybeInt ) =
    case ( dir, maybeInt ) of
        ( "forward", Just int ) ->
            Just (Forward int)

        ( "up", Just int ) ->
            Just (Up int)

        ( "down", Just int ) ->
            Just (Down int)

        _ ->
            Nothing


parseCommands : String -> List Command
parseCommands =
    String.trim
        >> String.lines
        >> List.filterMap parseCommand


parseCommand : String -> Maybe Command
parseCommand =
    String.split " "
        >> (\res ->
                case res of
                    [ dir, len ] ->
                        createCommand ( String.trim dir, String.toInt len )

                    _ ->
                        Nothing
           )



-- Answer


answer : String
answer =
    String.join "\n"
        [ "Part1: " ++ String.fromInt part1
        , "Part2: " ++ String.fromInt part2
        ]


expected : String
expected =
    "1989265"


data : String
data =
    """
forward 9
forward 9
forward 3
down 2
forward 8
down 8
forward 1
down 6
down 9
down 9
forward 1
up 5
up 4
up 8
down 6
down 7
forward 4
forward 6
forward 2
forward 2
forward 4
down 2
down 6
forward 6
forward 9
up 4
up 6
down 2
forward 7
up 7
down 8
down 4
down 6
forward 1
down 2
up 1
forward 8
down 9
forward 6
up 9
down 8
forward 5
forward 8
down 8
up 3
up 9
down 2
down 2
forward 5
up 7
forward 5
down 6
forward 4
down 2
up 2
up 7
up 1
down 4
down 8
forward 6
down 2
forward 7
down 1
forward 7
forward 1
up 1
down 4
down 3
down 4
down 4
up 8
down 1
up 7
forward 8
down 5
up 1
down 4
down 3
forward 4
up 7
forward 1
down 4
down 2
down 4
up 8
up 6
down 1
up 3
down 5
forward 4
down 3
forward 9
down 9
forward 2
down 4
up 3
down 4
forward 1
forward 7
forward 9
forward 7
forward 3
forward 6
down 4
forward 7
down 5
down 1
forward 7
up 1
down 8
down 7
down 7
down 7
down 3
forward 4
forward 6
forward 6
forward 1
down 7
down 6
down 8
up 5
down 7
up 6
forward 9
down 7
down 1
down 9
forward 8
up 5
down 6
forward 3
up 2
down 1
forward 2
down 3
up 6
forward 8
forward 1
forward 3
down 9
forward 1
down 3
up 7
forward 8
up 8
down 7
down 2
forward 3
up 7
forward 6
down 7
down 6
up 5
forward 9
down 7
up 5
forward 6
up 5
up 6
forward 6
down 8
down 1
forward 7
forward 6
down 5
down 6
forward 9
down 6
up 5
forward 9
forward 4
down 1
forward 5
down 4
forward 5
forward 1
down 1
forward 4
down 5
forward 4
up 8
down 1
forward 6
down 5
forward 8
forward 8
forward 5
down 7
down 4
forward 4
up 1
up 8
down 6
up 5
forward 6
forward 5
forward 9
down 3
down 5
forward 3
down 6
forward 6
up 7
up 6
down 6
down 1
forward 8
forward 9
up 5
forward 8
forward 9
forward 9
down 2
down 8
forward 8
down 2
up 8
down 2
down 2
up 1
down 5
down 6
down 1
down 8
down 9
forward 3
forward 2
down 6
up 8
forward 9
forward 7
forward 1
down 8
up 8
forward 8
down 5
down 3
up 3
forward 6
forward 5
down 4
forward 4
down 4
forward 5
forward 9
forward 2
forward 9
down 1
down 3
down 6
forward 6
down 7
forward 3
forward 4
forward 1
down 6
forward 1
forward 4
forward 2
forward 2
forward 1
forward 2
down 1
up 2
forward 1
down 3
forward 8
down 3
down 9
forward 5
down 3
down 3
forward 2
forward 9
down 9
forward 4
down 2
forward 5
up 8
down 4
forward 5
down 1
forward 9
down 1
forward 7
forward 2
down 2
down 6
up 3
forward 7
up 4
forward 7
forward 6
down 8
forward 2
down 3
forward 9
forward 4
forward 8
down 6
forward 8
down 9
down 2
down 3
forward 1
down 5
down 3
forward 2
forward 7
down 4
down 3
forward 9
down 2
forward 2
forward 1
up 6
up 4
down 5
forward 5
up 8
down 7
forward 6
down 5
forward 3
forward 3
forward 7
up 9
up 6
down 5
up 7
forward 2
forward 5
down 9
down 6
forward 7
down 9
up 2
up 5
forward 1
forward 8
forward 9
up 8
forward 9
forward 5
up 9
down 4
down 7
forward 2
forward 1
down 4
up 8
down 5
down 7
down 9
down 3
down 9
up 8
up 7
up 8
down 8
down 2
down 6
down 6
up 5
up 9
forward 1
down 8
up 4
up 3
forward 7
up 7
down 3
up 1
forward 3
down 7
forward 8
forward 2
down 6
down 2
up 7
up 5
forward 7
forward 1
forward 6
up 6
forward 5
down 2
up 4
forward 2
down 9
forward 6
forward 3
forward 3
forward 4
forward 2
down 6
forward 9
forward 7
down 4
up 1
forward 4
down 6
down 6
up 1
up 1
forward 3
down 5
up 5
down 3
down 6
up 8
down 2
up 6
up 1
forward 8
up 6
down 8
forward 9
forward 4
forward 9
down 7
down 9
down 6
down 1
forward 9
forward 9
down 6
down 5
up 6
down 9
up 4
up 5
forward 8
down 4
down 5
forward 8
forward 7
down 2
forward 2
forward 6
forward 7
down 1
down 7
down 1
down 6
forward 2
up 2
down 4
down 8
forward 1
down 1
down 3
down 3
up 9
down 9
forward 3
up 4
forward 1
down 9
down 8
down 9
forward 5
forward 4
up 3
down 8
forward 2
down 3
up 5
forward 4
down 7
down 8
down 9
forward 8
down 8
forward 4
down 6
down 3
forward 5
down 3
down 9
down 4
up 8
forward 4
up 6
down 3
forward 6
down 9
down 7
forward 7
forward 3
forward 2
forward 4
down 4
down 5
up 9
down 2
down 6
down 9
forward 7
forward 3
up 3
forward 3
down 4
down 7
forward 2
down 2
forward 3
down 8
down 7
down 7
forward 2
forward 2
up 6
forward 8
forward 9
up 3
forward 8
forward 5
forward 7
up 3
forward 3
forward 6
down 5
down 5
down 4
forward 1
forward 8
forward 4
forward 3
down 1
forward 8
down 4
up 5
forward 4
down 2
forward 7
down 2
forward 9
down 1
forward 6
forward 8
forward 6
forward 7
forward 1
forward 6
down 5
up 3
forward 7
down 6
forward 2
down 2
forward 8
forward 9
up 7
forward 1
forward 1
up 1
forward 1
down 2
forward 6
down 9
up 1
up 2
forward 6
forward 1
forward 7
down 1
up 8
forward 7
up 6
up 4
down 1
forward 2
down 4
down 1
down 7
down 4
up 3
forward 8
forward 3
forward 5
down 7
down 8
forward 5
forward 2
down 5
down 2
forward 2
up 9
down 3
down 5
up 7
down 4
down 2
down 7
forward 6
down 2
forward 1
up 4
forward 2
forward 2
down 5
down 1
down 1
forward 7
forward 6
down 7
down 5
up 1
up 3
forward 3
forward 9
forward 4
down 1
down 5
forward 3
forward 7
down 8
forward 8
forward 2
forward 7
up 7
down 7
down 4
down 2
up 6
up 1
forward 8
up 8
up 6
down 8
forward 1
down 5
forward 3
down 3
down 3
forward 1
up 3
up 3
forward 8
forward 8
down 8
forward 6
forward 2
down 7
forward 8
down 7
up 5
forward 7
down 1
forward 9
up 6
down 2
up 2
up 5
forward 6
forward 9
forward 3
down 8
forward 8
down 2
up 5
down 9
forward 5
down 6
down 3
down 9
up 8
up 3
down 2
forward 7
forward 4
forward 4
forward 8
up 6
up 4
forward 9
down 6
down 8
up 3
up 5
forward 8
forward 7
forward 4
down 8
forward 1
forward 5
down 9
forward 8
up 6
down 6
down 8
down 2
forward 4
forward 9
forward 2
forward 7
down 3
forward 3
up 6
down 4
forward 2
up 4
down 4
forward 4
forward 3
forward 1
up 6
forward 1
down 1
forward 7
up 4
forward 3
down 4
up 6
up 2
up 8
down 1
down 6
down 6
down 1
down 7
forward 8
down 9
forward 5
up 2
up 7
up 5
down 6
up 1
up 6
forward 4
down 7
forward 5
forward 1
down 6
forward 2
down 2
forward 9
down 9
up 6
forward 1
up 7
down 7
forward 1
down 6
up 1
forward 2
forward 1
down 4
forward 9
forward 7
forward 5
down 1
forward 2
down 2
down 2
down 5
forward 1
up 8
forward 9
down 7
forward 9
down 2
up 5
down 9
down 8
down 5
forward 8
forward 4
down 4
down 6
forward 1
down 5
up 6
down 3
down 3
forward 9
down 9
forward 6
down 5
up 6
down 5
up 7
forward 9
down 2
down 4
down 8
forward 4
up 7
forward 9
forward 7
up 5
down 7
down 5
down 1
forward 5
forward 4
down 2
up 3
forward 1
up 4
up 9
down 4
forward 3
down 4
down 9
forward 4
up 2
up 3
forward 7
up 6
down 8
down 8
forward 6
forward 2
forward 3
forward 9
forward 7
down 6
down 7
down 4
down 2
forward 8
down 6
forward 6
forward 6
forward 9
down 8
down 1
up 5
down 1
forward 9
down 1
up 8
forward 8
down 3
forward 1
down 9
forward 6
forward 4
forward 8
down 2
up 8
down 2
up 8
down 9
down 4
up 7
forward 7
forward 5
down 5
down 4
up 8
forward 1
down 7
forward 1
up 9
forward 9
forward 7
forward 9
down 9
forward 4
down 7
forward 6
forward 6
up 3
forward 2
down 5
up 8
down 1
up 8
down 4
down 1
up 6
forward 4
forward 3
forward 6
down 3
forward 4
forward 4
forward 4
down 8
forward 3
up 8
up 8
down 8
forward 6
forward 8
up 5
forward 6
down 8
down 7
up 4
forward 6
forward 9
down 9
forward 4
up 2
forward 1
up 3
down 9
down 8
forward 8
forward 8
forward 7
down 6
down 1
up 6
up 6
forward 9
forward 7
forward 7
down 3
down 6
down 9
down 4
forward 7
forward 3
forward 3
down 7
up 5
down 3
forward 6
forward 3
forward 5
up 3
down 7
forward 2
up 7
forward 9
down 3
down 9
forward 8
forward 5
up 7
up 2
up 8
forward 6
down 8
forward 2
forward 4
up 2
forward 2
forward 8
forward 4
down 8
forward 5
down 4
down 7
forward 3
down 3
up 1
down 9
forward 9
down 2
down 1
forward 1
down 6
down 3
forward 5
down 3
down 8
up 7
down 1
up 9
down 4
forward 9
down 4
forward 3
forward 6
down 3
forward 3
down 2
down 7
down 1
up 4
down 9
down 1
down 3
down 4
down 8
down 7
forward 4
down 4
down 9
forward 2
forward 7
forward 2
down 6
up 8
forward 6
down 2
forward 6
up 8
forward 6
down 9
forward 2
forward 6
"""


pitch : String
pitch =
    """
--- Day 2: Dive! ---

Now, you need to figure out how to pilot this thing.

It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

- `forward X` increases the horizontal position by `X` units.
- `down X` increases the depth by `X` units.
- `up X` decreases the depth by `X` units.

Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.

The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:

    forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2

Your horizontal position and depth both start at 0. The steps above would then modify them as follows:

- `forward 5` adds `5` to your horizontal position, a total of `5`.
- `down 5` adds `5` to your depth, resulting in a value of `5`.
- `forward 8` adds `8` to your horizontal position, a total of `13`.
- `up 3` decreases your depth by `3`, resulting in a value of `2`.
- `down 8` adds `8` to your depth, resulting in a value of `10`.
- `forward 2` adds `2` to your horizontal position, a total of `15`.

After following these instructions, you would have a horizontal position of `15` and a depth of `10`. (Multiplying these together produces `150`.)

Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?

--- Part Two ---

Based on your calculations, the planned course doesn't seem to make any sense. You find the submarine manual and discover that the process is actually slightly more complicated.

In addition to horizontal position and depth, you'll also need to track a third value, aim, which also starts at 0. The commands also mean something entirely different than you first thought:

- `down X` increases your aim by `X` units.
- `up X` decreases your aim by `X` units.
- `forward X` does two things:
    - It increases your horizontal position by `X` units.
    - It increases your depth by your aim multiplied by `X`.

Again note that since you're on a submarine, down and up do the opposite of what you might expect: "down" means aiming in the positive direction.

Now, the above example does something different:

- `forward 5` adds `5` to your horizontal position, a total of `5`. Because your aim is `0,` your depth does not change.
- `down 5` adds `5` to your aim, resulting in a value of `5`.
- `forward 8` adds `8` to your horizontal position, a total of `13`. Because your aim is `5,` your depth increases by `8*5=40`.
- `up 3` decreases your aim by `3`, resulting in a value of `2`.
- `down 8` adds `8` to your aim, resulting in a value of `10`.
- `forward 2` adds `2` to your horizontal position, a total of `15`. Because your aim is `10`, your depth increases by `2*10=20` to a total of `60`.

After following these new instructions, you would have a horizontal position of `15` and a depth of `60`. (Multiplying these produces `900`.)

Using this new interpretation of the commands, calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?
"""


day : { pitch : String, answer : String }
day =
    { pitch = pitch
    , answer = answer
    }

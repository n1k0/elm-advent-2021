module Pages.Day exposing (..)

import Days.Day1 as Day1
import Days.Day2 as Day2
import Html exposing (..)
import Html.Attributes exposing (..)
import Spa.Page
import View exposing (View)


page _ =
    Spa.Page.sandbox
        { init = \day -> { day = day }
        , update = \_ model -> model
        , view = view
        }


type alias Model =
    { day : Int }


getDayData : Int -> Result String { pitch : String, answer : String }
getDayData day =
    case day of
        1 ->
            Ok Day1.day

        2 ->
            Ok Day2.day

        _ ->
            Err <| "No data could be found for day #" ++ String.fromInt day


hasDayData : Int -> Bool
hasDayData day =
    case getDayData day of
        Ok _ ->
            True

        Err _ ->
            False


extractTitle : String -> String
extractTitle =
    String.trim
        >> String.lines
        >> List.head
        >> Maybe.map (String.replace "---" "")
        >> Maybe.withDefault "Untitled"


githubSource : Int -> String
githubSource day =
    "https://github.com/n1k0/elm-advent-2021/tree/main/src/Days/Day"
        ++ String.fromInt day
        ++ ".elm"


adventOfCodeSource : Int -> String
adventOfCodeSource day =
    "https://adventofcode.com/2021/day/" ++ String.fromInt day


view : Model -> View msg
view { day } =
    case getDayData day of
        Ok dayData ->
            { title = extractTitle dayData.pitch
            , body =
                [ div [ class "row" ]
                    [ div [ class "col-lg-6" ]
                        [ h2 [] [ text <| extractTitle dayData.pitch ]
                        , p []
                            [ a [ href <| adventOfCodeSource day, target "_blank" ]
                                [ text "View original" ]
                            ]
                        , pre [ style "white-space" "pre-wrap" ]
                            [ dayData.pitch
                                |> String.trim
                                |> text
                            ]
                        ]
                    , div [ class "col-lg-6" ]
                        [ h3 [ class "fs-2" ] [ text "Answer" ]
                        , p []
                            [ a [ href <| githubSource day, target "_blank" ]
                                [ text "View code" ]
                            ]
                        , div [ class "card" ]
                            [ pre [ class "card-body pb-0" ]
                                [ text dayData.answer ]
                            ]
                        ]
                    ]
                ]
            }

        Err error ->
            { title = "Day #" ++ String.fromInt day ++ ": error"
            , body =
                [ h2 [] [ text <| "Day #" ++ String.fromInt day ++ ": error" ]
                , p [] [ text error ]
                ]
            }

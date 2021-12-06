module Pages.Day exposing (..)

import Days.Day1 as Day1
import Days.Day2 as Day2
import Days.Day3 as Day3
import Effect exposing (Effect)
import Html exposing (..)
import Html.Attributes exposing (..)
import Http
import Shared
import Spa.Page
import View exposing (View)


page _ =
    Spa.Page.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }


type Msg
    = NoOp
    | CodeSourceReceived (Result Http.Error String)


type alias Model =
    { day : Int
    , sourceCode : String
    }


init : Int -> ( Model, Effect Shared.Msg Msg )
init day =
    { day = day, sourceCode = "" }
        |> Effect.withCmd (requestSourceCode day)


requestSourceCode : Int -> Cmd Msg
requestSourceCode day =
    Http.get
        { url = githubSourceCode day
        , expect = Http.expectString CodeSourceReceived
        }


update : Msg -> Model -> ( Model, Effect Shared.Msg Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Effect.none )

        CodeSourceReceived (Err _) ->
            ( { model | sourceCode = "Error while fetching source code." }, Effect.none )

        CodeSourceReceived (Ok sourceCode) ->
            ( { model | sourceCode = sourceCode }, Effect.none )


getDayData : Int -> Result String { pitch : String, answer : String }
getDayData day =
    case day of
        1 ->
            Ok Day1.day

        2 ->
            Ok Day2.day

        3 ->
            Ok Day3.day

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


githubSourceCode : Int -> String
githubSourceCode day =
    "https://raw.githubusercontent.com/n1k0/elm-advent-2021/main/src/Days/Day"
        ++ String.fromInt day
        ++ ".elm"


adventOfCodeSource : Int -> String
adventOfCodeSource day =
    "https://adventofcode.com/2021/day/" ++ String.fromInt day


view : Model -> View msg
view { day, sourceCode } =
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
                        , div [ class "card mb-3" ]
                            [ pre [ class "card-body pb-0" ]
                                [ text dayData.answer ]
                            ]
                        , div [ class "card" ]
                            [ div [ class "card-header d-flex justify-content-between" ]
                                [ span [] [ text "Source code " ]
                                , a [ href <| githubSource day, target "_blank" ]
                                    [ text "Open on Github" ]
                                ]
                            , pre [ class "card-body pb-0" ]
                                [ text sourceCode ]
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

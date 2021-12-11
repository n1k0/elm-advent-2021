module Pages.Day exposing (..)

import Days.Day1 as Day1
import Days.Day2 as Day2
import Days.Day3 as Day3
import Days.Day4 as Day4
import Days.Day5 as Day5
import Days.Day6 as Day6
import Effect exposing (Effect)
import Html exposing (..)
import Html.Attributes exposing (..)
import Http
import Lib.Markdown as Markdown
import Shared
import Spa.Page
import SyntaxHighlight as SH
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
        |> Effect.withShared (Shared.setCurrentDay (Just day))
        |> Effect.addCmd (requestSourceCode day)


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
            ( { model | sourceCode = parseSourceCode sourceCode }, Effect.none )


getDayData : Int -> Result String { pitch : String, answer : String }
getDayData day =
    case day of
        1 ->
            Ok Day1.day

        2 ->
            Ok Day2.day

        3 ->
            Ok Day3.day

        4 ->
            Ok Day4.day

        5 ->
            Ok Day5.day

        6 ->
            Ok Day6.day

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


parseSourceCode : String -> String
parseSourceCode string =
    string
        |> String.lines
        |> List.filter (not << String.startsWith "module ")
        |> List.filter (not << String.startsWith "import ")
        |> String.join "\n"
        |> String.trim
        |> String.split "-- Answer"
        |> List.head
        |> Maybe.withDefault "Error: couldn't parse source code"


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
                        , dayData.pitch
                            |> Markdown.simple
                            |> div []
                        ]
                    , div [ class "col-lg-6" ]
                        [ h3 [ class "fs-2" ] [ text "Answer" ]
                        , div [ class "card mb-3" ]
                            [ pre [ class "card-body pb-0", style "white-space" "pre-wrap" ]
                                [ text dayData.answer ]
                            ]
                        , div [ class "card" ]
                            [ div [ class "card-header d-flex justify-content-between" ]
                                [ span [] [ text "Source code " ]
                                , a [ href <| githubSource day, target "_blank" ]
                                    [ text "Open on Github" ]
                                ]
                            , div [ class "card-body pb-0" ]
                                [ SH.useTheme SH.oneDark
                                , SH.elm sourceCode
                                    |> Result.map (SH.toBlockHtml Nothing)
                                    |> Result.withDefault
                                        (pre [] [ code [] [ text sourceCode ] ])
                                , node "style"
                                    []
                                    [ text ".elmsh { background: none; font-size: .9em; }"
                                    ]
                                ]
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

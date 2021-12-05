module Route exposing (..)

import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser)


type Route
    = Home
    | Day Int
    | NotFound Url


route : Parser (Route -> a) a
route =
    Parser.oneOf
        [ Parser.map Home Parser.top
        , Parser.map Day <| Parser.s "day" </> Parser.int
        ]


toRoute : Url -> Route
toRoute url =
    let
        protocol =
            if url.protocol == Url.Https then
                "https"

            else
                "http"

        port_ =
            case url.port_ of
                Just p ->
                    ":" ++ String.fromInt p

                Nothing ->
                    ""

        path =
            Maybe.withDefault "/" url.fragment
    in
    Url.fromString (protocol ++ "://" ++ url.host ++ port_ ++ path)
        |> Maybe.withDefault url
        |> Parser.parse route
        |> Maybe.withDefault (NotFound url)


toUrl : Route -> String
toUrl r =
    case r of
        Home ->
            "/"

        Day day ->
            "/day/" ++ String.fromInt day

        NotFound url ->
            Url.toString url


matchAny : Route -> Route -> Maybe ()
matchAny any r =
    if any == r then
        Just ()

    else
        Nothing


matchHome : Route -> Maybe ()
matchHome r =
    matchAny Home r


matchDay : Route -> Maybe Int
matchDay r =
    case r of
        Day day ->
            Just day

        _ ->
            Nothing

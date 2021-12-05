module Main exposing (..)

import Browser exposing (Document)
import Html exposing (..)
import Html.Attributes exposing (..)
import Pages.Day as Day
import Pages.Home as Home
import Route
import Shared exposing (Shared)
import Spa
import View exposing (View)


mappers =
    ( View.map, View.map )


toDocument : Shared -> View msg -> Document msg
toDocument _ view =
    { title = view.title
    , body =
        [ div []
            [ h1 [] [ text "Advent of Code 2021, in Elm" ]
            , List.range 1 31
                |> List.map
                    (\day ->
                        a [ href <| Route.toUrl (Route.Day day) ]
                            [ text <| "Day " ++ String.fromInt day ]
                    )
                |> List.map (\x -> li [] [ x ])
                |> ul []
            , div [] view.body
            ]
        ]
    }


main =
    Spa.init
        { init = Shared.init
        , subscriptions = Shared.subscriptions
        , update = Shared.update
        , defaultView = View.defaultView
        , toRoute = Route.toRoute
        , extractIdentity = always Nothing
        , protectPage = always ""
        }
        |> Spa.addPublicPage mappers Route.matchHome Home.page
        |> Spa.addPublicPage mappers Route.matchDay Day.page
        |> Spa.application { toDocument = toDocument }
        |> Browser.application

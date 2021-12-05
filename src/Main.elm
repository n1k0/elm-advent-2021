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
        [ div [ class "container" ]
            [ h1 [ class "my-5" ]
                [ a [ href <| Route.toUrl Route.Home ]
                    [ text "Advent of Code 2021, in Elm" ]
                ]
            , div [ class "row" ]
                [ div [ class "col-sm-2" ]
                    [ List.range 1 31
                        |> List.map
                            (\day ->
                                if Day.hasDayData day then
                                    a
                                        [ class "list-group-item list-group-item-action fw-bold"
                                        , href <| Route.toUrl (Route.Day day)
                                        ]
                                        [ text <| "Day #" ++ String.fromInt day ]

                                else
                                    span
                                        [ class "list-group-item list-group-item-action disabled"
                                        , style "text-decoration" "line-through"
                                        ]
                                        [ text <| "Day #" ++ String.fromInt day ]
                            )
                        |> div [ class "list-group" ]
                    ]
                , view.body
                    |> div [ class "col-sm-10" ]
                ]
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

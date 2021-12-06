module Pages.Home exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown.Html as MdHtml
import Markdown.Parser as Parser
import Markdown.Renderer exposing (Renderer, defaultHtmlRenderer)
import Shared exposing (Shared)
import Spa.Page
import View exposing (View)


page shared =
    Spa.Page.static (view shared)


renderer : Renderer (Html msg)
renderer =
    { defaultHtmlRenderer
        | html =
            MdHtml.oneOf
                [ MdHtml.tag "intro" (div [])
                ]
    }


intro : Result String (List (Html msg))
intro =
    "<intro>This is [my](https://nicolas.perriault.net/) attempt at the 2021 [Advent of Code](https://adventofcode.com/) in [Elm](https://elm-lang.org/).</intro>"
        |> Parser.parse
        |> Result.mapError (List.map Parser.deadEndToString >> String.join "\n")
        |> Result.andThen (Markdown.Renderer.render renderer)


view : Shared -> View msg
view _ =
    { title = "Home"
    , body =
        case intro of
            Ok html ->
                html

            Err _ ->
                [ text "error" ]
    }

module Lib.Markdown exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown.Html as MdHtml
import Markdown.Parser as Parser
import Markdown.Renderer exposing (Renderer, defaultHtmlRenderer)


simple : String -> List (Html msg)
simple md =
    ("<simple>" ++ md ++ "</simple>")
        |> Parser.parse
        |> Result.mapError (List.map Parser.deadEndToString >> String.join "\n")
        |> Result.andThen (Markdown.Renderer.render renderer)
        |> (\res ->
                case res of
                    Ok html ->
                        html

                    Err error ->
                        [ div [ class "alert alert-danger" ]
                            [ text error ]
                        ]
           )


renderer : Renderer (Html msg)
renderer =
    { defaultHtmlRenderer
        | html =
            MdHtml.oneOf
                [ MdHtml.tag "simple" (div [])
                ]
    }

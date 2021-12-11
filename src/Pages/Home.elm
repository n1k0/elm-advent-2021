module Pages.Home exposing (..)

import Effect
import Html exposing (..)
import Html.Attributes exposing (..)
import Lib.Markdown as Markdown
import Shared
import Spa.Page
import View exposing (View)


page _ =
    Spa.Page.element
        { init = \_ -> () |> Effect.withShared (Shared.setCurrentDay Nothing)
        , update = \_ _ -> ( (), Effect.none )
        , view = view
        , subscriptions = always Sub.none
        }


view : () -> View msg
view _ =
    { title = "Home"
    , body =
        """This is [my](https://nicolas.perriault.net/) attempt at the 2021
        [Advent of Code](https://adventofcode.com/) in [Elm](https://elm-lang.org/).
        """
            |> Markdown.simple
    }

module Pages.Home exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Lib.Markdown as Markdown
import Shared exposing (Shared)
import Spa.Page
import View exposing (View)


page shared =
    Spa.Page.static (view shared)


view : Shared -> View msg
view _ =
    { title = "Home"
    , body =
        """This is [my](https://nicolas.perriault.net/) attempt at the 2021
        [Advent of Code](https://adventofcode.com/) in [Elm](https://elm-lang.org/).
        """
            |> Markdown.simple
    }

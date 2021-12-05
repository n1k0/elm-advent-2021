module Pages.Day exposing (..)

import Html exposing (..)
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


view : Model -> View msg
view { day } =
    { title = "Day " ++ String.fromInt day
    , body = [ text <| "day page " ++ String.fromInt day ]
    }

module Pages.Home exposing (..)

import Html exposing (..)
import Shared exposing (Shared)
import Spa.Page
import View exposing (View)


page shared =
    Spa.Page.static (view shared)


view : Shared -> View msg
view _ =
    { title = "Home"
    , body = [ text "This is the homepage" ]
    }

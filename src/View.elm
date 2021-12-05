module View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


type alias View msg =
    { title : String
    , body : List (Html msg)
    }


map : (msg1 -> msg) -> View msg1 -> View msg
map tomsg view =
    { title = view.title
    , body =
        [ view.body
            |> List.map (Html.map tomsg)
            |> div [ class "container" ]
        ]
    }


defaultView : View msg
defaultView =
    { title = "No page"
    , body =
        [ text "You should not see this page unless you forgot to add pages to your application" ]
    }

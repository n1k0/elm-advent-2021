module Shared exposing (..)

import Browser.Navigation as Nav


type alias Shared =
    { key : Nav.Key
    , identity : Maybe String
    , currentDay : Maybe Int
    }


type Msg
    = SetCurrentDay (Maybe Int)
    | SetIdentity String (Maybe String)
    | ResetIdentity


identity : Shared -> Maybe String
identity =
    .identity


init : () -> Nav.Key -> ( Shared, Cmd Msg )
init _ key =
    ( { key = key
      , identity = Nothing
      , currentDay = Nothing
      }
    , Cmd.none
    )


update : Msg -> Shared -> ( Shared, Cmd Msg )
update msg shared =
    case msg of
        SetCurrentDay currentDay ->
            ( { shared | currentDay = currentDay }
            , Cmd.none
            )

        SetIdentity newIdentity redirect ->
            ( { shared | identity = Just newIdentity }
            , redirect
                |> Maybe.map (Nav.replaceUrl shared.key)
                |> Maybe.withDefault Cmd.none
            )

        ResetIdentity ->
            ( { shared | identity = Nothing }, Cmd.none )


subscriptions : Shared -> Sub Msg
subscriptions =
    always Sub.none


setIdentity : String -> Maybe String -> Msg
setIdentity =
    SetIdentity


setCurrentDay : Maybe Int -> Msg
setCurrentDay =
    SetCurrentDay

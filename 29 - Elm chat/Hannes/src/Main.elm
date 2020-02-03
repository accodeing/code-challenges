module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import List exposing (append, head)

-- MAIN

main =
  Browser.sandbox { init = init, update = update, view = view }

-- MODEL

type alias Model =
  { history : List(String)
  , message : String
  }

init : Model
init =
  {
    history = []
  , message = ""
  }

-- UPDATE

type Msg = Write String | Submit

update : Msg -> Model -> Model
update msg model =
  case msg of
    Write newMessage ->
      { model | message = newMessage }
    Submit ->
      { model | history =
        append model.history [model.message]
      , message = ""
      }

-- VIEW

renderList : List String -> Html msg
renderList list =
  ul []
    (List.map (\l -> li [] [ text l ]) list)

view : Model -> Html Msg
view model =
  div []
    [
      p [] [ text "History" ]
    , renderList model.history
    , viewInput "text" "Chat" model.message Write
    , button [ onClick Submit ] [ text "Submit" ]
    ]

viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []

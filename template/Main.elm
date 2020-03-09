module Main exposing (main)

import Color
import Html exposing (Html)
import TypedSvg exposing (circle, svg, g)
import TypedSvg.Attributes exposing (cx, cy, fill, r, stroke, strokeWidth, viewBox, transform )
import TypedSvg.Core exposing (Svg)
import TypedSvg.Types exposing (Paint(..), px, Transform(..))



-- CONSTANTS


type alias Margin =
    { top : Float
    , right : Float
    , bottom : Float
    , left : Float
    }


margin : Margin
margin =
    { top = 10
    , right = 30
    , bottom = 30
    , left = 30
    }


width : Float
width =
    800


height : Float
height =
    400



-- MAIN


chart : Svg msgtra
chart =
    circle
        [ cx (px 100)
        , cy (px 100)
        , r (px 30)
        , fill <| Paint Color.blue
        ]
        []


main : Svg msg
main =
    svg
        [ viewBox 0 0 width height ]
        [ g [ transform [ Translate margin.left margin.top ] ] [ chart ] ]

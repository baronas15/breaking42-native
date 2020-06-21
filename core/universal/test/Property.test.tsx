import React from 'react'
import renderer from 'react-test-renderer'

import { Property } from '../components/Property'

describe('Property', () => {
  it('should cover Property component', () => {
    const component = renderer.create(
      <Property title={'Testing'} item={'Some value'} />,
    )

    expect(component).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "flexDirection": "column",
            "padding": 5,
          }
        }
      >
        <Text
          style={
            Object {
              "backgroundColor": "transparent",
              "color": "#555",
              "fontFamily": "System",
              "fontSize": 12,
              "fontWeight": "600",
              "letterSpacing": 0,
              "lineHeight": 16,
            }
          }
        >
          Testing
        </Text>
        <Text
          style={
            Object {
              "color": "#555",
            }
          }
        >
          Some value
        </Text>
      </View>
    `)
  })
})

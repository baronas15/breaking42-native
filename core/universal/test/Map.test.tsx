import React from 'react'
import renderer from 'react-test-renderer'

import { Map } from '../components/Map'

describe('Map', () => {
  it('should cover Map component', () => {
    const component = renderer.create(<Map gps={[]} />)

    expect(component).toMatchInlineSnapshot(`null`)
  })
})

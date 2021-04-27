import { shallow } from 'enzyme'
import DropdownLink from './components/DropdownLink'

describe('<DropdownLink />', () => {
  it('renders link', () => {
    expect(shallow(<DropdownLink />)).toMatchSnapshot()
  })
})
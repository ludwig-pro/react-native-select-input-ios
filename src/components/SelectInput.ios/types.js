import PropTypes from 'prop-types'
import { ViewPropTypes } from 'react-native'

import selectInputPropTypes from '../AbstractSelectInput/types.js'

export default {
  ...selectInputPropTypes,
  buttonsBackgroundColor: PropTypes.string,
  buttonsBorderColor: PropTypes.string,
  buttonsBorderWidth: PropTypes.number,
  buttonsTextColor: PropTypes.string,
  buttonsTextSize: PropTypes.number,
  cancelKeyText: PropTypes.string,
  keyboardBackgroundColor: PropTypes.string,
  submitKeyText: PropTypes.string,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
}

export const defaultProps = {
  cancelKeyText: 'Cancel',
  keyboardBackgroundColor: '#FFFFFF',
  buttonsBackgroundColor: '#CCCFD6',
  buttonsTextColor: '#006BFF',
  buttonsBorderColor: '#CCCFD6',
  buttonsBorderWidth: 0,
  options: [{ value: 0, label: '0' }],
  submitKeyText: 'Done',
  value: 0
}

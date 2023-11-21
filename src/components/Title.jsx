import PropTypes from 'prop-types'

const Title = ({ classes, text }) => {
  return (
    <div className={classes}>{text}</div>
  )
}

Title.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Title
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')

    }
    //1. const Header = ({title}) => {


    return (
        <header className='header'>
            <h2 style={headingStyle}>{title}</h2>
            {/* 1.or <h1>{title}</h1> */}
            <Button color='green' text='Add' onClick={onClick}/>
            {/* <Button color='red' text='Hello 1'/>
            <Button color='black' text='Hello 2'/> */}

        </header>
    )
}            
Header.defaultProps ={
    title: 'Task Tracker',
}
const headingStyle = {color: 'white', backgroundColor:'black'}
Header. propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header

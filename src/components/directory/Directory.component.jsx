import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directorySelector';
import MenuItem from '../menu-item/MenuItem.component';

import './directory.styles.scss'

class Directory extends React.Component {

    render() {
        const { sections } = this.props;

        return (
            <div className='directory-menu'>
                {
                    sections.map( ({ id, ...otherProps }) => (
                        <MenuItem key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
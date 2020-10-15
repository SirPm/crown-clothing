import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton.component';
import { addItem } from '../../redux/cart/cartActions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, preview }) => {
    const { name, price, imageUrl } = item;
    
    return (
        <div className={ preview ? ('special') : ('collection-item') }>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton inverted onClick={ () => { addItem(item)} }>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => {
            dispatch(addItem(item))
        }
    }
}

export default connect( null, mapDispatchToProps )(CollectionItem);

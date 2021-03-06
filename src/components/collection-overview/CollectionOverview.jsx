import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {

    return (
        <div className='collection-overview'>
            { collections.map( ({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} { ...otherCollectionProps } />
            ) )}
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
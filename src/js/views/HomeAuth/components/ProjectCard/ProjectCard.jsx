import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import './styles.scss';
import { HeartIcon, PersonIcon } from '../../../../components/svg';

const ProjectCard = ({ item }) => {
    return (
        <Link className="card-box" to={`/poject/${item.id}`}>
            <div className="card-project">
                <div className="card-project__image">
                    <img 
                        className="" 
                        src={
                            item.imageUrl 
                                ? item.imageUrl 
                                : "https://res.cloudinary.com/bryancloudinary/image/upload/v1669263463/Untrip/Group_11_htpy3c.svg"
                        } 
                        alt={``} 
                    />
                </div>
                <div className="card-project__body">
                    <h3 className="card-project__body--title">Project title super duper juper large</h3>
                    <div className="card-project__body--info">
                        <div className="body__info--owner">
                            <PersonIcon />
                            <p className="">Owner or </p>
                        </div>
                        <div className="body__info-favorite">
                            <HeartIcon 
                                isFull={item.isFavorite}
                                withStroke={!item.isFavorite}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

ProjectCard.propTypes = {
    item: PropTypes.object
}
ProjectCard.defaultProps = {
    item: {
        id: null,
        name: "Test project",
        imageUrl: "",   
    }
}
export default ProjectCard;
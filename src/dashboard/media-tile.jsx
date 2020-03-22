import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

import DashboardStyles from './dashboard-styles';
import * as Constants from '../constants';

export const MediaTile = (props) => {
    return (
        <Col
            md="6"
            xs="1"
            style={DashboardStyles.MediaTile}>
            <Link to={`mediaDetail/${props.mediaType}/${props.id}`}>
                <Container>
                    <Row>
                        <Col>
                            <Badge style={DashboardStyles.VoteBadge} color="success">{`${props.votePercentage}%`}</Badge>
                            <img style={DashboardStyles.Image} src={`${Constants.imageBaseUrl}/${props.posterPath}`} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span style={DashboardStyles.MediaTileText}>{props.title}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span style={DashboardStyles.MediaTileText}>{`${Constants.monthNames[props.releaseDate.getMonth()]} ${props.releaseDate.getFullYear()}`}</span>
                        </Col>
                    </Row>
                </Container>
            </Link>
        </Col>
    );
}

export default MediaTile;
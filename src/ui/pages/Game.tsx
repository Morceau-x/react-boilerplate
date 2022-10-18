import React from 'react';
import { useStyles } from '../../hooks/useTheme';
import { css } from '@emotion/css';

/**
 * Component props
 */
type GameProps = {
	bombs: string;
	width: string;
	height: string;
};

/**
 * Game
 * React Functional Component
 *
 * @param props
 */
export const Game: React.FC<GameProps> = (props) => {
	const styles = useStyles(makeStyles);

	return <></>;
};

const makeStyles = () => ({
	container: css``,
});

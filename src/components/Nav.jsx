import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useGlobalContext} from "./context"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	bar: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '1em',
		position: "relative",
		'&>*': {
			marginRight: '1em',
		},
	},

	title: {
		flexGrow: 1,
	},
	icon: {
		width: "2.5rem",
		height: "2.5rem",

	},
	amount: {
		position: "absolute",
		top: ".5em",
		right: ".5em",
		width: "1.5rem",
		height: "1.5rem",
		borderRadius: "50%",
		background: theme.palette.secondary.light,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

	}
}));

export default function Nav() {
	const classes = useStyles();
	const {amount} = useGlobalContext() 

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<div className={classes.bar}>
					<Typography variant="h3" align="center" className={classes.title}>
						Cart
					</Typography>
					<div className={classes.bar}>
						<ShoppingBasketIcon className={classes.icon} />
						<Typography variant="body2" color="initial" align="left" className={classes.amount}>
							{amount}
						</Typography>
					</div>

				</div>
			</AppBar>
		</div>
	);
}

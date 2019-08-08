import classnames from 'classnames';
import PropTypes from 'prop-types';
import React,{ Component } from 'react';
import { HashRouter,Link } from 'react-router-dom';

class RouterHistory extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount() {
		this.to = this.props.to;
		if (this.to && this.to[0] !== '/') this.to = `/${this.to}`;
		
		this.onLocationChange({
			history:this.props.history,
			to: this.to
		});
	}
	
	onLocationChange({
		history,
		to
	}) {
		const { location } = history;
		if(location.pathname === to){	
			this.props.activateMe();
		}
	}

	render() {
		const {
			className,
			classNameActive,
			classNameHasActiveChild,
			active,
			hasActiveChild,
			to,
			externalLink,
			hasSubMenu,
			toggleSubMenu,
			children,
		} = this.props;
		return (
			hasSubMenu || externalLink
				? (
					<a
						className={classnames(
							className,
							hasActiveChild && classNameHasActiveChild
						)}
						target={externalLink ? '_blank' : undefined}
						href={to}
						onClick={toggleSubMenu}
					>
						{children}
					</a>
				)
				: (
					<HashRouter>
					<Link
						className={classnames(
							className,
							active && classNameActive
						)}
						to={to}
					>
						{children}
					</Link>
					</HashRouter>
				)
		); 
	}
}

RouterHistory.propTypes = {
	className: PropTypes.string.isRequired,
	classNameActive: PropTypes.string.isRequired,
	classNameHasActiveChild: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	hasActiveChild: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	externalLink: PropTypes.bool,
	hasSubMenu: PropTypes.bool.isRequired,
	toggleSubMenu: PropTypes.func,
	activateMe: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.array,
	]).isRequired,
};

export default RouterHistory;
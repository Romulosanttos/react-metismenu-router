import classnames from 'classnames';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RouterHistory extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount() {
		this.to = this.props.to;
		if (this.to[0] !== '/') this.to = `/${this.to}`;
		let destiny = this.props.history.location.state;
		if(destiny){
			destiny = destiny.from.hash.split('#')[1]
		}
		this.onLocationChange(destiny);
	}
	
	onLocationChange(destiny) {
		if ((destiny || '/') === this.to) {
			this.props.activateMe();
		}else if(destiny){
			this.props.history.replace(destiny)
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
					<Link
						className={classnames(
							className,
							active && classNameActive
						)}
						to={to}
					>
						{children}
					</Link>
				)
		); 
	}
}